# 01111219 Entrepreneurial Economics — final exam study site

Self-contained study guide for the Kasetsart University final in **01111219 Entrepreneurial Economics** (Professor Dr. Poomthan Rangkakulnuwat), Tuesday 1 December 2026, 09:00–11:00 Bangkok time. 80 multiple-choice questions (30 on Ch 1–2, 30 on Ch 3–4, 20 on Ch 5), no calculator, no cheat sheet, 2B pencil.

The site is written so you can prepare **without opening the lecture slides**: every concept has a plain-English "what it means / why it matters / on the exam" box, every formula has its variables defined, worked examples show every arithmetic step, Stata output is reproduced with a column-by-column reading guide, and the key slide diagrams are redrawn as inline SVG.

Open `index.html` in a browser. No build step. GitHub Pages deploys from the `main` branch, root folder.

| Page | What it covers |
| --- | --- |
| `index.html` | Exam rules, 30 / 30 / 20 question split, how to use the site, 5-day plan (Thu 26 Nov → Tue 1 Dec) |
| `demand.html` | Ch 1–2: demand, shifts vs movements, elasticity (midpoint), total revenue, cross/income elasticity, regression, hypothesis tests, stars, two full Stata examples · 30 practice Qs |
| `behavior.html` | Ch 3–4: Theory of Planned Behavior, constructs and items, the 550-person Bangkok EV survey, `egen rowmean`, two regressions, 4-step strategy, 4Ps · 30 practice Qs |
| `market.html` | Ch 5: WTP, double-bounded CVM, Van Westendorp PSM (PMC/PME/IDP/OPP), egg-cake example, Newton–Miller–Smith demand and revenue · 20 practice Qs |
| `practice.html` | All 80 questions: section filter, practice mode (instant feedback) or exam simulation (120-minute timer, submit & grade by section), live score, show all answers, reset, shuffle |
| `formulas.html` | One-page last-minute review |

Where a slide's printed number disagrees with its own arithmetic, the page shows a "slide check" callout explaining which value to use.

Formulas use MathJax from a CDN when the browser is online. Question bank: `js/quiz-data.js`; quiz engine: `js/quiz.js`.
