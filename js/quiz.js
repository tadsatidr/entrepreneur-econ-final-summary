(function () {
  function render(root, items) {
    const score = document.createElement("div");
    score.className = "scorebar";
    const label = document.createElement("div");
    const reset = document.createElement("button");
    reset.className = "ghost";
    reset.type = "button";
    reset.textContent = "Reset this set";
    score.append(label, reset);
    root.append(score);

    const state = items.map(() => ({ pick: null, revealed: false }));

    function updateScore() {
      let revealed = 0;
      let correct = 0;
      state.forEach((s, i) => {
        if (!s.revealed) return;
        revealed += 1;
        if (s.pick === items[i].answer) correct += 1;
      });
      label.innerHTML = revealed
        ? "Checked <b>" + revealed + "</b> of " + items.length + ". Right on the first check: <b>" + correct + "</b>."
        : "Choose an answer, then check it. " + items.length + " questions.";
    }

    items.forEach((item, index) => {
      const card = document.createElement("article");
      card.className = "q";
      const title = document.createElement("h3");
      title.textContent = (index + 1) + ". " + item.q;
      card.append(title);

      const opts = document.createElement("div");
      opts.className = "opts";
      item.options.forEach((text, oi) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = text;
        btn.addEventListener("click", () => {
          if (state[index].revealed) return;
          state[index].pick = oi;
          opts.querySelectorAll("button").forEach((b, j) => b.classList.toggle("picked", j === oi));
        });
        opts.append(btn);
      });
      card.append(opts);

      const actions = document.createElement("div");
      actions.className = "q-actions";
      const check = document.createElement("button");
      check.type = "button";
      check.textContent = "Check answer";
      const reveal = document.createElement("button");
      reveal.type = "button";
      reveal.className = "ghost";
      reveal.textContent = "Reveal without answering";
      actions.append(check, reveal);
      card.append(actions);

      const explain = document.createElement("div");
      explain.className = "explain";
      card.append(explain);

      function show(forceWrongIfBlank) {
        if (state[index].revealed) return;
        state[index].revealed = true;
        const buttons = opts.querySelectorAll("button");
        buttons.forEach((b, j) => {
          b.classList.remove("picked");
          if (j === item.answer) b.classList.add("good");
          else if (j === state[index].pick) b.classList.add("bad");
        });
        const picked = state[index].pick;
        const ok = picked === item.answer;
        const lead = picked == null
          ? "Answer: "
          : (ok ? "Correct. " : "Not this one. ");
        explain.innerHTML = "<p><strong>" + lead + item.options[item.answer] + "</strong></p><p>" + item.why + "</p>";
        explain.classList.add("show");
        check.disabled = true;
        reveal.disabled = true;
        updateScore();
        if (forceWrongIfBlank && picked == null) state[index].pick = -1;
      }

      check.addEventListener("click", () => show(false));
      reveal.addEventListener("click", () => {
        if (state[index].pick == null) state[index].pick = -1;
        show(true);
      });
      root.append(card);
    });

    reset.addEventListener("click", () => {
      root.innerHTML = "";
      render(root, items);
    });
    updateScore();
  }

  document.querySelectorAll("[data-quiz]").forEach((root) => {
    const key = root.getAttribute("data-quiz");
    const bank = window.QUIZ && window.QUIZ[key];
    if (!bank) {
      root.textContent = "Question set missing.";
      return;
    }
    render(root, bank);
  });
})();
