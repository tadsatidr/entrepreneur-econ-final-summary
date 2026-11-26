/* Quiz engine for the 01111219 study site.
   - [data-quiz="a|b|c"]  : a chapter block in practice mode (instant feedback).
   - [data-quiz-app]      : the full 80-question app with section filter, practice / exam-simulation modes,
                            live score, Show all answers, Reset, Shuffle and a timer in exam mode. */
(function () {
  "use strict";
  var BANK = window.QUIZ || {};
  var SECTION_NAMES = { a: "Ch 1–2", b: "Ch 3–4", c: "Ch 5" };
  var LETTERS = ["A", "B", "C", "D", "E"];

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function collect(sections) {
    var list = [];
    sections.forEach(function (s) {
      (BANK[s] || []).forEach(function (item, i) {
        list.push({ sec: s, idx: i, item: item });
      });
    });
    return list;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* One question card. opts.mode: "practice" | "exam". Returns a controller. */
  function makeCard(entry, number, opts) {
    var item = entry.item;
    var st = { pick: null, revealed: false, viaShowAll: false };
    var card = el("article", "q");
    var meta = el("div", "meta", SECTION_NAMES[entry.sec] + (item.topic ? " · " + item.topic.replace(/^Ch [0-9–]+ · /, "") : ""));
    var h = el("h3", null, number + ". " + item.q);
    var box = el("div", "opts");
    var buttons = item.options.map(function (text, oi) {
      var b = el("button");
      b.type = "button";
      var L = el("span", "letter", LETTERS[oi] + ".");
      b.appendChild(L);
      b.appendChild(document.createTextNode(text));
      b.addEventListener("click", function () {
        if (st.revealed) return;
        st.pick = oi;
        buttons.forEach(function (x, j) { x.classList.toggle("picked", j === oi); });
        if (opts.mode === "practice") reveal(false);
        opts.onChange();
      });
      box.appendChild(b);
      return b;
    });
    var explain = el("div", "explain");
    card.appendChild(meta); card.appendChild(h); card.appendChild(box); card.appendChild(explain);

    function reveal(viaShowAll) {
      if (st.revealed) return;
      st.revealed = true;
      st.viaShowAll = !!viaShowAll && st.pick == null;
      buttons.forEach(function (b, j) {
        b.classList.remove("picked");
        if (j === item.answer) b.classList.add("good");
        else if (j === st.pick) b.classList.add("bad");
        b.disabled = false;
      });
      var lead = st.pick == null ? "Answer: " : (st.pick === item.answer ? "✔ Correct — " : "✘ Not quite. Correct answer: ");
      explain.innerHTML = "";
      var p1 = el("p"); var s1 = el("strong", null, lead + LETTERS[item.answer] + ". " + item.options[item.answer]); p1.appendChild(s1);
      var p2 = el("p", null, item.why);
      explain.appendChild(p1); explain.appendChild(p2);
      explain.classList.add("show");
    }
    return {
      node: card,
      sec: entry.sec,
      state: st,
      correct: function () { return st.pick === item.answer; },
      reveal: reveal
    };
  }

  /* ---------- simple chapter block ---------- */
  function renderBlock(root, sec) {
    var entries = collect([sec]);
    if (!entries.length) { root.textContent = "Question set missing."; return; }
    root.innerHTML = "";
    var bar = el("div", "scorebar");
    var label = el("div");
    var actions = el("div", "q-actions");
    actions.style.marginTop = "0";
    var showAll = el("button", "ghost", "Show all answers"); showAll.type = "button";
    var reset = el("button", "ghost", "Reset"); reset.type = "button";
    actions.appendChild(showAll); actions.appendChild(reset);
    bar.appendChild(label); bar.appendChild(actions);
    root.appendChild(bar);
    var cards = [];
    function update() {
      var answered = 0, right = 0;
      cards.forEach(function (c) { if (c.state.pick != null && c.state.revealed) { answered++; if (c.correct()) right++; } });
      label.innerHTML = "Answered <b>" + answered + "</b> / " + cards.length + " · Correct <b>" + right + "</b>" +
        (answered ? " (" + Math.round(100 * right / answered) + "%)" : "") + " · click an option for instant feedback";
    }
    entries.forEach(function (e, i) {
      var c = makeCard(e, i + 1, { mode: "practice", onChange: update });
      cards.push(c); root.appendChild(c.node);
    });
    showAll.addEventListener("click", function () { cards.forEach(function (c) { c.reveal(true); }); update(); });
    reset.addEventListener("click", function () { renderBlock(root, sec); });
    update();
  }

  /* ---------- full practice / mock-exam app ---------- */
  function renderApp(root) {
    var state = { filter: "all", mode: "practice", shuffled: false, timer: null, endAt: 0, submitted: false };
    var hash = (location.hash || "").replace("#", "");
    if (hash === "set-a") state.filter = "a";
    if (hash === "set-b") state.filter = "b";
    if (hash === "set-c") state.filter = "c";

    var bar = el("div", "qbar");
    var row1 = el("div", "row");
    var row2 = el("div", "row");
    bar.appendChild(row1); bar.appendChild(row2);

    function seg(name, items, current, onPick) {
      var wrap = el("span", "seg"); wrap.setAttribute("role", "group"); wrap.setAttribute("aria-label", name);
      items.forEach(function (it) {
        var b = el("button", null, it[1]); b.type = "button";
        b.setAttribute("aria-pressed", String(it[0] === current));
        b.addEventListener("click", function () { onPick(it[0]); });
        wrap.appendChild(b);
      });
      return wrap;
    }
    var list = el("div");
    var result = el("div");
    root.innerHTML = "";
    root.appendChild(bar); root.appendChild(result); root.appendChild(list);

    var cards = [];
    var stat = el("span", "stat");
    var timerEl = el("span", "timer");

    function sections() { return state.filter === "all" ? ["a", "b", "c"] : [state.filter]; }

    function update() {
      var answered = 0, right = 0, shown = 0;
      cards.forEach(function (c) {
        if (c.state.pick != null) answered++;
        if (c.state.revealed) shown++;
        if (c.state.revealed && c.correct()) right++;
      });
      if (state.mode === "exam" && !state.submitted) {
        stat.innerHTML = "Answered <b>" + answered + "</b> / " + cards.length + " · answers hidden until you submit";
      } else {
        var graded = cards.filter(function (c) { return c.state.revealed && c.state.pick != null; }).length;
        stat.innerHTML = "Answered <b>" + graded + "</b> / " + cards.length + " · Correct <b>" + right + "</b>" +
          (graded ? " (" + Math.round(100 * right / graded) + "%)" : "");
      }
    }

    function stopTimer() { if (state.timer) { clearInterval(state.timer); state.timer = null; } timerEl.textContent = ""; }
    function startTimer() {
      stopTimer();
      var secs = cards.length * 90;
      state.endAt = Date.now() + secs * 1000;
      function tick() {
        var left = Math.max(0, Math.round((state.endAt - Date.now()) / 1000));
        var m = Math.floor(left / 60), s = left % 60;
        timerEl.textContent = "⏱ " + m + ":" + (s < 10 ? "0" : "") + s;
        if (left <= 0) { stopTimer(); submit(true); }
      }
      tick();
      state.timer = setInterval(tick, 1000);
    }

    function submit(timeUp) {
      if (state.submitted) return;
      state.submitted = true;
      stopTimer();
      cards.forEach(function (c) { c.reveal(false); });
      var per = {};
      cards.forEach(function (c) {
        per[c.sec] = per[c.sec] || { n: 0, r: 0 };
        per[c.sec].n++; if (c.correct()) per[c.sec].r++;
      });
      var total = cards.filter(function (c) { return c.correct(); }).length;
      result.innerHTML = "";
      var box = el("div", "result-box");
      var h = el("h3", null, (timeUp ? "Time is up. " : "") + "Score: " + total + " / " + cards.length + " (" + Math.round(100 * total / cards.length) + "%)");
      h.style.marginTop = "0";
      box.appendChild(h);
      var ul = el("ul");
      Object.keys(per).sort().forEach(function (k) {
        ul.appendChild(el("li", null, SECTION_NAMES[k] + ": " + per[k].r + " / " + per[k].n));
      });
      box.appendChild(ul);
      box.appendChild(el("p", "mini", "Wrong answers are marked red with the explanation underneath. Re-read those sections on the chapter pages, then press Reset to try again."));
      result.appendChild(box);
      drawBar();
      update();
      if (box.scrollIntoView) box.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function build() {
      stopTimer();
      state.submitted = false;
      result.innerHTML = "";
      list.innerHTML = "";
      var entries = collect(sections());
      if (state.shuffled) entries = shuffle(entries);
      cards = entries.map(function (e, i) {
        var c = makeCard(e, i + 1, { mode: state.mode, onChange: update });
        list.appendChild(c.node);
        return c;
      });
      if (state.mode === "exam") startTimer();
      drawBar();
      update();
    }

    function drawBar() {
      row1.innerHTML = ""; row2.innerHTML = "";
      row1.appendChild(seg("Section", [["all", "All 80"], ["a", "Ch 1–2 (30)"], ["b", "Ch 3–4 (30)"], ["c", "Ch 5 (20)"]], state.filter,
        function (v) { state.filter = v; build(); }));
      row1.appendChild(seg("Mode", [["practice", "Practice mode"], ["exam", "Exam simulation"]], state.mode,
        function (v) { state.mode = v; build(); }));
      var shuf = el("button", "act", state.shuffled ? "Order: shuffled" : "Order: by chapter"); shuf.type = "button";
      shuf.addEventListener("click", function () { state.shuffled = !state.shuffled; build(); });
      row1.appendChild(shuf);
      row2.appendChild(stat);
      if (state.mode === "exam" && !state.submitted) {
        row2.appendChild(timerEl);
        var sub = el("button", "act primary", "Submit & grade"); sub.type = "button";
        sub.addEventListener("click", function () { submit(false); });
        row2.appendChild(sub);
      } else {
        var showAll = el("button", "act", "Show all answers"); showAll.type = "button";
        showAll.addEventListener("click", function () { cards.forEach(function (c) { c.reveal(true); }); update(); });
        row2.appendChild(showAll);
      }
      var reset = el("button", "act", "Reset quiz"); reset.type = "button";
      reset.addEventListener("click", build);
      row2.appendChild(reset);
    }
    build();
  }

  document.querySelectorAll("[data-quiz-app]").forEach(renderApp);
  document.querySelectorAll("[data-quiz]").forEach(function (root) {
    if (root.hasAttribute("data-quiz-app")) return;
    renderBlock(root, root.getAttribute("data-quiz"));
  });
})();
