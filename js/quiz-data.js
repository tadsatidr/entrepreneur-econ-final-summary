/* 80-question bank in exam proportions: a = Ch 1–2 (30), b = Ch 3–4 (30), c = Ch 5 (20).
   answer = zero-based index of the correct option. Every item is grounded in the lecture slides
   as explained on the chapter pages of this site. */
window.QUIZ = {
  "a": [
    {
      "topic": "Ch 1 · Shift vs movement",
      "q": "The price of blue jeans rises while income, preferences and the prices of other goods stay the same. On the Chapter 1 slides this is shown as…",
      "options": [
        "A rightward shift of the demand curve from D1 to D2",
        "A leftward shift of the demand curve — a decrease in demand",
        "A movement along the demand curve — a decrease in quantity demanded",
        "No change, because demand only responds to income"
      ],
      "answer": 2,
      "why": "Only the good’s own price causes a movement along the curve (“a change in quantity demanded”). Income, preference, a substitute’s price and a complement’s price shift the whole curve. Saying “demand decreased” for an own-price change is the classic wording trap."
    },
    {
      "topic": "Ch 1 · Demand shifters",
      "q": "Which change raises the demand for blue jeans (shifts the curve to the right)?",
      "options": [
        "A lower price of a complement of blue jeans",
        "A higher price of a complement of blue jeans",
        "A lower price of a substitute for blue jeans",
        "A lower price of blue jeans themselves"
      ],
      "answer": 0,
      "why": "The slides list four reasons demand rises: higher income, greater preference, a HIGHER substitute price, and a LOWER complement price. A higher complement price or a lower substitute price would shift demand left. A lower price of jeans themselves is a movement along the curve, not a shift."
    },
    {
      "topic": "Ch 1 · Market demand",
      "q": "At $12, Jones wants 4 units, Smith wants 5 units and all other buyers want 100 units. What is market quantity demanded at $12?",
      "options": [
        "9",
        "100",
        "109",
        "141"
      ],
      "answer": 2,
      "why": "Market demand is the horizontal sum of individual demands at the same price: 4 + 5 + 100 = 109. (141 is the market quantity at $11: 5 + 6 + 130.) 9 forgets the other buyers."
    },
    {
      "topic": "Ch 1 · Midpoint formula",
      "q": "Price rises from $10 (point A) to $12 (point B). What average price (P-bar) does the slide use in the elasticity formula?",
      "options": [
        "$2",
        "$10",
        "$11",
        "$12"
      ],
      "answer": 2,
      "why": "P-bar = (P1 + P2)/2 = (10 + 12)/2 = 22/2 = 11. $2 is ΔP, not the average. Using $10 or $12 alone would give a different percent change depending on direction — the midpoint avoids that."
    },
    {
      "topic": "Ch 1 · Percent change",
      "q": "Quantity falls from 100 to 50. Using the average quantity as the base, the percent change in quantity is…",
      "options": [
        "−50%",
        "−100%",
        "+66.7%",
        "−66.7%"
      ],
      "answer": 3,
      "why": "ΔQ = 50 − 100 = −50 and Q-bar = (100 + 50)/2 = 75, so %ΔQ = −50/75 × 100 = −66.7% (two-thirds). −50% uses the old quantity as base; −100% uses the new one. The sign is negative because quantity fell."
    },
    {
      "topic": "Ch 1 · Elasticity worked example",
      "q": "With %ΔP = 18.2% and %ΔQ = −66.7%, the slide reports the price elasticity as 3.67 (in size). This demand is…",
      "options": [
        "Inelastic, because 3.67 is positive",
        "Elastic, because |E| = 3.67 > 1",
        "Unit elastic",
        "Perfectly elastic"
      ],
      "answer": 1,
      "why": "Classify by the absolute value: |−66.7/18.2| ≈ 3.67 > 1 → elastic. Quantity’s percent change is several times the price’s. Unit elastic needs exactly 1; perfectly elastic needs infinity (horizontal curve)."
    },
    {
      "topic": "Ch 1 · Interpreting E",
      "q": "A firm’s price elasticity of demand is E = −2. According to the slide, this means…",
      "options": [
        "If the firm lowers its price by 2%, sales rise by 1%",
        "If the firm lowers its price by 1%, sales are expected to rise by 2%",
        "If the firm lowers its price by 1 baht, sales rise by 2 units",
        "Demand is inelastic, so cutting price lowers revenue"
      ],
      "answer": 1,
      "why": "Elasticity is percent over percent: %ΔQ/%ΔP = −2, so a 1% price cut → +2% quantity. “1 baht → 2 units” confuses elasticity with a slope in units. |−2| > 1 means elastic, not inelastic."
    },
    {
      "topic": "Ch 1 · Five types",
      "q": "A demand curve drawn as a vertical line — a 10% price rise leaves quantity unchanged — has elasticity…",
      "options": [
        "|E| = 0, perfectly inelastic",
        "|E| = ∞, perfectly elastic",
        "|E| = 1, unit elastic",
        "|E| > 1, elastic"
      ],
      "answer": 0,
      "why": "Vertical = quantity never responds → |E| = 0, perfectly inelastic. A horizontal line is perfectly elastic (|E| = ∞). Unit elastic: 10% → 10%. Elastic: 10% → e.g. 20%."
    },
    {
      "topic": "Ch 1 · Elasticity and revenue",
      "q": "Demand is elastic (|Ed| > 1). The firm raises its price by 10%. Quantity demanded falls by ____ 10%, and total revenue ____.",
      "options": [
        "less than; rises",
        "equal to; is unchanged",
        "greater than; rises",
        "greater than; falls"
      ],
      "answer": 3,
      "why": "Elastic means quantity reacts more than price, so a 10% price rise cuts quantity by more than 10%; the quantity loss outweighs the price gain → TR falls. (Inelastic: less than 10%, TR rises. Unit: equal, unchanged.)"
    },
    {
      "topic": "Ch 1 · Elasticity and revenue",
      "q": "Demand is inelastic (|Ed| < 1). The firm cuts its price by 10%. Total revenue (total expenditure)…",
      "options": [
        "Falls",
        "Rises",
        "Is unchanged",
        "Doubles"
      ],
      "answer": 0,
      "why": "Inelastic: quantity rises by less than 10%, so the price cut dominates and TR falls. With inelastic demand TR moves in the same direction as price. Cutting price raises TR only when demand is elastic."
    },
    {
      "topic": "Ch 1 · Elasticity and revenue",
      "q": "If demand is unit elastic (|Ed| = 1), a 10% price decrease causes total revenue to…",
      "options": [
        "Rise by 10%",
        "Fall by 10%",
        "Remain unchanged",
        "Fall to zero"
      ],
      "answer": 2,
      "why": "Unit elastic: quantity rises by exactly 10%, which exactly offsets the 10% price cut, so TR is unchanged (the slide’s box shows TR with a bar over it: constant)."
    },
    {
      "topic": "Ch 1 · Linear demand & TR",
      "q": "On the slide’s straight-line demand (from P = 40 at Q = 0 to Q = 80 at P = 0), total revenue is highest at point E (Q = 40, P = 20). What is TR there and what is elasticity at that point?",
      "options": [
        "600; elastic",
        "800; unit elastic",
        "800; perfectly inelastic",
        "750; inelastic"
      ],
      "answer": 1,
      "why": "TR = 40 × 20 = 800, the peak of the TR curve (350, 600, 750, 800, 750, 600, 350, 0). TR is maximised where demand is unit elastic; above E (higher prices) demand is elastic, below E it is inelastic."
    },
    {
      "topic": "Ch 1 · Linear demand & TR",
      "q": "Moving down the same demand curve from H (Q = 10, P = $35) to G (Q = 20, P = $30), total revenue changes from 350 to ____, which shows demand is ____ in this range.",
      "options": [
        "600; elastic",
        "600; inelastic",
        "300; elastic",
        "350; unit elastic"
      ],
      "answer": 0,
      "why": "TR at G = 20 × 30 = 600. Price fell and TR rose (350 → 600), which only happens when demand is elastic — the upper part of a linear demand curve is the elastic part."
    },
    {
      "topic": "Ch 1 · Cross-price elasticity",
      "q": "The slide’s USDA table gives a cross-price elasticity of −0.21 for meat and dairy. By the slide’s rule, the two goods are…",
      "options": [
        "Substitutes",
        "Unrelated, because 0.21 < 1",
        "Inferior goods",
        "Complements"
      ],
      "answer": 3,
      "why": "Cross-price elasticity: Ec > 0 → substitutes; Ec < 0 → complements. −0.21 is negative → complements. Size compared with 1 matters for own-price and income elasticity classification, not for this sign rule. Inferior is about income."
    },
    {
      "topic": "Ch 1 · Income elasticity",
      "q": "When income rises by 10%, the quantity of good X bought rises by 15% (Ey = 1.5). Good X is…",
      "options": [
        "An inferior good",
        "A normal good that is a necessity",
        "A normal good that is a luxury",
        "A complement"
      ],
      "answer": 2,
      "why": "Ey > 0 → normal; inside normal, Ey > 1 → luxury (slide pictures: watch, sports car, jewellery). Ey < 1 would be a necessity; Ey < 0 inferior. Complement is a cross-price concept."
    },
    {
      "topic": "Ch 1 · Income elasticity",
      "q": "A student’s income rises and she buys fewer packs of instant noodles; the income elasticity is −0.4. The noodles are…",
      "options": [
        "A luxury",
        "An inferior good",
        "A necessity",
        "A substitute"
      ],
      "answer": 1,
      "why": "Negative income elasticity (Ey < 0) means X is an inferior good — people buy less as income rises. Necessity and luxury are both normal goods with positive Ey."
    },
    {
      "topic": "Ch 1 · Income elasticity",
      "q": "Which income elasticity describes a necessity in the slide’s classification?",
      "options": [
        "Ey = 0.5",
        "Ey = −0.3",
        "Ey = 1.8",
        "Ey = ∞"
      ],
      "answer": 0,
      "why": "Necessity: normal good (Ey > 0) with Ey < 1 → 0.5. −0.3 is inferior (trap: necessities are NOT inferior); 1.8 is a luxury."
    },
    {
      "topic": "Ch 2 · Population vs sample",
      "q": "In Chapter 2, what is the difference between β1 and b1?",
      "options": [
        "β1 is the true (unknown) population parameter; b1 is the sample estimator (estimated coefficient)",
        "β1 is the estimated coefficient from the sample; b1 is the true value",
        "They are the same number written two ways",
        "β1 is the p-value; b1 is the coefficient"
      ],
      "answer": 0,
      "why": "The slide’s table: population parameter (true parameter) β; sample estimator (estimated coefficient) b. “We don’t know the true value of parameters β0, β1, β2, β3” — we estimate them with b and test them."
    },
    {
      "topic": "Ch 2 · Hypothesis testing",
      "q": "To test whether own price affects quantity demanded, the slides set up…",
      "options": [
        "H0: β1 ≠ 0 vs H1: β1 = 0; reject H0 if the p-value is greater than α",
        "H0: β1 = 0 vs H1: β1 ≠ 0; reject H0 if the p-value is less than α (0.01, 0.05 or 0.10)",
        "H0: b1 = 0; reject if the coefficient is negative",
        "H0: β1 = 1; reject if R-squared is above 0.5"
      ],
      "answer": 1,
      "why": "Null: no effect (β1 = 0). Alternative: some effect (β1 ≠ 0). Reject the null when the p-value is below the significance level α, which can be 0.01, 0.05 or 0.10. Hypotheses are about the population β, not the sample b."
    },
    {
      "topic": "Ch 2 · Stars",
      "q": "In ŷ = 90.8 − 0.06X1 + 0.116X2 − 2.355X3, the p-value of X3 is 0.095. How many stars does it get?",
      "options": [
        "*** (significant at 1%)",
        "** (significant at 5%)",
        "* (significant at 10% only)",
        "No star"
      ],
      "answer": 2,
      "why": "0.095 < 0.10 → reject at 10%; 0.095 > 0.05 and > 0.01 → fail to reject at 5% and 1%. So one star: −2.355X3*."
    },
    {
      "topic": "Ch 2 · Stars",
      "q": "In the same equation, X2 has coefficient 0.116 with p-value 0.57. The correct conclusion is…",
      "options": [
        "Reject H0 at 10%: one star",
        "Reject H0 at 1% because 0.57 is less than 1",
        "Significant because the coefficient is positive",
        "Fail to reject H0 at 10%, 5% and 1%: statistically insignificant, no star"
      ],
      "answer": 3,
      "why": "0.57 is larger than 0.10, 0.05 and 0.01, so H0: β2 = 0 is never rejected; the slide writes “do not show stars”. Comparing with 1 or looking at the sign is not a significance test."
    },
    {
      "topic": "Ch 2 · Stars",
      "q": "In Example 2, the price coefficient has p-value 0.037. On the slide it is reported as…",
      "options": [
        "(0.037)***",
        "(0.037)*",
        "(0.037)**",
        "(0.037) with no star"
      ],
      "answer": 2,
      "why": "0.037 < 0.10 ✓ and < 0.05 ✓ but not < 0.01 ✗ → significant at 5% → two stars. The footnote: ***, **, * = significance at 0.01, 0.05, 0.1."
    },
    {
      "topic": "Ch 2 · Stata example 1",
      "q": "regress y x gives ŷ = 49.667 − 2.1576x with p = 0.000 for x (y = quantity, x = price). The slide’s interpretation of the slope is…",
      "options": [
        "If price rises by $1, mean quantity demanded decreases by about 2.1576 units",
        "If price rises by 1%, quantity demanded falls by 2.1576%",
        "Price has no significant effect on quantity",
        "If price is zero, quantity is 2.1576 units"
      ],
      "answer": 0,
      "why": "In a linear regression the coefficient is a slope in units: ΔQ/ΔP = −2.1576 units per $1, and p = 0.000 < 0.01 so we reject H0. The “1% → 2.1576%” reading is an elasticity interpretation, which needs the means, which needs the means. 49.667 is the intercept."
    },
    {
      "topic": "Ch 2 · Stata example 1",
      "q": "Why does the slide say to ignore the intercept b0 = 49.67 even though its p-value is 0.000?",
      "options": [
        "Because it is statistically insignificant",
        "Because Stata always reports the intercept wrongly",
        "Because the intercept is the elasticity",
        "Because it is the quantity demanded when price is zero, which holds no economic meaning"
      ],
      "answer": 3,
      "why": "Rejecting H0: β0 = 0 only says the constant is not zero. b0 is the predicted quantity at a price of zero (about 49.67 units) — a situation with no economic meaning, so we ignore it."
    },
    {
      "topic": "Ch 2 · Elasticity at the means",
      "q": "Using b1 = −2.16, mean price 5.5 and mean quantity 37.8, the price elasticity at the means is about −0.31. What does it mean?",
      "options": [
        "A $1 price rise lowers quantity by 0.31 units — elastic demand",
        "A 1% price rise lowers quantity demanded by 0.31% — inelastic demand",
        "A 1% price rise lowers quantity by 31% — elastic demand",
        "Demand is unit elastic"
      ],
      "answer": 1,
      "why": "Ed = b1 × P-bar/Q-bar = −2.16 × 5.5/37.8 ≈ −2.16 × (1/7) ≈ −0.31. It is a percent-to-percent measure; |−0.31| < 1 → inelastic. The slide: “If the price increases by 1%, the quantity demanded falls by 0.31%.”"
    },
    {
      "topic": "Ch 2 · Reading Stata",
      "q": "Example 1 reports R-squared = 0.9757. This tells you that…",
      "options": [
        "The price coefficient is significant at 97.57%",
        "The fitted line explains about 97.57% of the variation in quantity demanded",
        "The elasticity is 0.9757",
        "97.57% of consumers buy the product"
      ],
      "answer": 1,
      "why": "R² = SS Model / SS Total = 384.05/393.6 ≈ 0.9757: the share of the variation in y explained by the regression. Significance comes from P>|t|; elasticity needs b × P-bar/Q-bar."
    },
    {
      "topic": "Ch 2 · Stata procedure",
      "q": "The slides show two ways to run regress y x. What is the difference between them?",
      "options": [
        "The Command window gives OLS; the Do-file gives a different estimator",
        "Only the Do-file can show the p-values",
        "The Command window is used to enter data; the Do-file to rename variables",
        "Commands typed in the Command window cannot be saved; commands written in a Do-file can be saved"
      ],
      "answer": 3,
      "why": "Method 1: type in the Command window (note: commands cannot be saved). Method 2: type the command in a Do-file — you can save it and run it again (highlight → Execute selection). Both run the same OLS regression."
    },
    {
      "topic": "Ch 2 · Stata example 2",
      "q": "For Qd = β0 + β1Price + β2Advertise + β3GPP + u, what signs does demand theory lead us to expect for b1, b2, b3?",
      "options": [
        "−, +, +",
        "+, +, +",
        "−, −, +",
        "+, −, −"
      ],
      "answer": 0,
      "why": "Price: negative (law of demand). Advertising expenditure: positive (raises preference). GPP (gross provincial product, i.e. income): positive for a normal good."
    },
    {
      "topic": "Ch 2 · Stata example 2",
      "q": "Quantity sold is measured in 1,000 units and the price coefficient is −12.203 (p = 0.037). The slide’s interpretation is…",
      "options": [
        "If price increases by $1, quantity falls by 12.203 units",
        "If price increases by 1%, quantity falls by 12.2%",
        "If price increases by $1, the average quantity sold decreases by about 12,200 units, all else constant",
        "Price has no significant effect on quantity sold"
      ],
      "answer": 2,
      "why": "The coefficient is in the units of the dependent variable — thousands of units — so −12.203 × 1,000 ≈ −12,200 units. p = 0.037 < 0.05 → reject H0 (significant). It is a slope, not an elasticity."
    },
    {
      "topic": "Ch 2 · Elasticity at the means",
      "q": "In Example 2, advertising (p = 0.971) and GPP (p = 0.429) are insignificant, and the price coefficient is significant. Which statement about the elasticities at the means is correct?",
      "options": [
        "Advertising elasticity = 0.008 × 125/175 and GPP elasticity = 2.677 × 17.95/175",
        "All three elasticities are 0 because R-squared is below 0.8",
        "Price elasticity is −12.202, the coefficient itself",
        "Advertising and GPP elasticities are set to 0; the price elasticity −12.202 × 15.1/175 has size above 1, so demand is (slightly) elastic"
      ],
      "answer": 3,
      "why": "If you fail to reject H0: β = 0, the slide sets the elasticity to 0 — no multiplication. Price: −12.202 × 15.1/175 ≈ −1.05 (the slide prints −1.503); either way the size exceeds 1 → elastic. The coefficient is a slope, not the elasticity."
    }
  ],
  "b": [
    {
      "topic": "Ch 3 · Demand",
      "q": "Chapter 3 defines demand as…",
      "options": [
        "The quantity a consumer actually bought last month",
        "The desire to own a product regardless of income",
        "The willingness and ability of buyers to purchase different quantities of a good or service at different prices during a specific time period",
        "The total revenue earned by a firm at each price"
      ],
      "answer": 2,
      "why": "Both willingness AND ability (the two highlighted words), at different prices, during a specific time period. Desire without ability is not demand; past purchases and revenue are other concepts."
    },
    {
      "topic": "Ch 3 · Observed vs unobserved",
      "q": "In Qxd = β0 + β1Px + β2Pz + β3Y + u, which part does Chapter 3 call the unobserved variables?",
      "options": [
        "Px",
        "u",
        "Pz",
        "Y"
      ],
      "answer": 1,
      "why": "Px, Pz and Y are observed variables (they can be recorded in a data table). u represents the unobserved variables affecting Qxd — psychological factors that TPB later tries to measure."
    },
    {
      "topic": "Ch 3 · Economics vs psychology",
      "q": "Case Qx2: a consumer intends to buy, but no purchase occurs (purchase intention ≠ actual purchase). Which explanation do the slides use?",
      "options": [
        "Psychology explanation (Theory of Planned Behavior)",
        "Economics explanation (demand theory)",
        "The law of demand",
        "Cross-price elasticity"
      ],
      "answer": 0,
      "why": "Qx1 — purchasing occurred (intention = actual purchase) — is the economics/demand-theory case. Qx2 — intention only — needs the psychology explanation, TPB, because intention and actual purchase can differ."
    },
    {
      "topic": "Ch 4 · 4-step strategy",
      "q": "What is the correct order of the four steps of the data-driven marketing strategy?",
      "options": [
        "Market segmentation → Segment naming → Segment profiling → Data-driven strategy formulation (4Ps)",
        "Segment naming → Market segmentation → Strategy formulation → Segment profiling",
        "Segment profiling → Market segmentation → Segment naming → 4Ps",
        "4Ps → Market segmentation → Segment profiling → Segment naming"
      ],
      "answer": 0,
      "why": "Step 1 group consumers (segmentation), Step 2 give the chosen group a meaningful name (naming), Step 3 analyse its constraints, drivers and barriers (profiling), Step 4 design the 4Ps from the data — “never guess, let the data drive your strategy.”"
    },
    {
      "topic": "Ch 3 · TPB constructs",
      "q": "“The degree to which people evaluate a specific behavior as favorable or unfavorable” defines…",
      "options": [
        "Subjective norm",
        "Attitude toward behavior",
        "Perceived behavioral control",
        "Intention"
      ],
      "answer": 1,
      "why": "That is the slide’s definition of attitude. Subjective norm = perceived social pressure; PBC = difficulty in implementation, past experiences, expected obstacles; intention = motivation/effort."
    },
    {
      "topic": "Ch 3 · TPB constructs",
      "q": "Subjective norms refer to…",
      "options": [
        "The consumer’s own technical knowledge",
        "How much effort a person will put into the behavior",
        "Perceived social pressure on behavior accomplishment",
        "Actions already taken, such as test drives"
      ],
      "answer": 2,
      "why": "Subjective norm = perceived social pressure (family, friends, someone respected/boss, experts or influencers, neighbours encouraging you). Knowledge is a PBC item, effort describes intention, and actions taken are behavior."
    },
    {
      "topic": "Ch 3 · TPB constructs",
      "q": "“People’s difficulty in implementation, reflecting past experiences and expected difficulties or obstacles” defines…",
      "options": [
        "Attitude",
        "Behavior",
        "Subjective norm",
        "Perceived behavioral control"
      ],
      "answer": 3,
      "why": "That is perceived behavioral control (PBC): resources, autonomy, confidence and knowledge that make the behavior feel easy or hard."
    },
    {
      "topic": "Ch 3 · TPB constructs",
      "q": "Individual behavioral intention reflects…",
      "options": [
        "Whether the person has already placed a booking deposit",
        "The social pressure from family and friends",
        "How motivated individuals are to perform a specific behavior — how much effort they will put into doing it",
        "The price the consumer considers too expensive"
      ],
      "answer": 2,
      "why": "Intention = motivation/effort, a cognitive readiness (mental state). Placing a deposit is behavior (ultimate/preparatory action); social pressure is subjective norm."
    },
    {
      "topic": "Ch 3 · Classifying items",
      "q": "“Experts or influencers I follow encourage me to purchase a pure electric vehicle” (sn4) measures…",
      "options": [
        "Subjective norm",
        "Attitude",
        "Perceived behavioral control",
        "Behavior"
      ],
      "answer": 0,
      "why": "Encouragement from other people = social pressure = subjective norm. In Chapter 4, sn4 is used in the Promotion strategy (expert advocacy & influencers)."
    },
    {
      "topic": "Ch 3 · Classifying items",
      "q": "Which item measures BEHAVIOR rather than intention?",
      "options": [
        "I am willing to make an effort to gather information and test-drive a pure EV before my next purchase",
        "I intend to choose a pure electric vehicle as my next car",
        "I expect to purchase a pure EV within the next 3 to 5 years",
        "I have taken actual test drives of Pure EVs"
      ],
      "answer": 3,
      "why": "Behavior items describe actions already done (“I HAVE taken test drives” = beh2). Willingness, intending and expecting are about the future → intention items (int4, int2/3, int5). Watch the trap between int4 and beh2."
    },
    {
      "topic": "Ch 3 · Classifying items",
      "q": "“I have sufficient financial resources and situational readiness to purchase an EV without hesitation” (pbc1) belongs to…",
      "options": [
        "Attitude",
        "Perceived behavioral control",
        "Subjective norm",
        "Intention"
      ],
      "answer": 1,
      "why": "It is about one’s resources and ability to carry out the purchase → PBC. In the 4P table pbc1 (with pbc6) supports the Price strategy (budget and cash-flow readiness)."
    },
    {
      "topic": "Ch 3 · Intention vs behavior",
      "q": "According to the slide comparing INTENTION and BEHAVIOR, what is the measurement scope of each?",
      "options": [
        "Intention: preparatory actions; Behavior: mental state",
        "Intention: cognitive readiness (mental state); Behavior: preparatory actions (e.g. information search, test drive, loan checks) and ultimate action (final purchase & adoption)",
        "Both measure only the final purchase",
        "Intention: the price paid; Behavior: the quantity bought"
      ],
      "answer": 1,
      "why": "Intention is a mental state (cognitive readiness). Behavior covers observable actions — from preparatory steps (search, test drive, loan checks) to the ultimate action (purchase and adoption)."
    },
    {
      "topic": "Ch 3 · TPB equations",
      "q": "Which equation is TPB equation (2) in the slides?",
      "options": [
        "intent = β0 + β1 att + β2 sn + β3 pbc + ε1",
        "beh = δ0 + δ1 att + δ2 sn + ε2",
        "pbc = δ0 + δ1 intent + δ2 beh + ε2",
        "beh = δ0 + δ1 intent + δ2 pbc + ε2"
      ],
      "answer": 3,
      "why": "Equation (1) explains intention by att, sn and pbc. Equation (2) explains behavior by intention and pbc (pbc appears in both). Attitude and subjective norm are not in equation (2)."
    },
    {
      "topic": "Ch 3 · Hypothesized signs",
      "q": "According to Ajzen (1991), as presented in Chapter 3, the expected signs of β1, β2, β3, δ1, δ2 are…",
      "options": [
        "All positive",
        "All negative",
        "β positive, δ negative",
        "Only δ1 positive; the rest are zero"
      ],
      "answer": 0,
      "why": "A more positive attitude, a stronger positive subjective norm and greater PBC all enhance intention; stronger intentions and PBC positively influence actual behavior. Every arrow is drawn with (+)."
    },
    {
      "topic": "Ch 4 · The data",
      "q": "How was the Chapter 4 EV data collected?",
      "options": [
        "Random sampling of 132 Bangkok men",
        "An online Van Westendorp survey of 100 gym-goers",
        "Questionnaires distributed in Bangkok using convenience sampling; 550 people responded (file EV.xlsx)",
        "Ten provinces with price, advertising and GPP"
      ],
      "answer": 2,
      "why": "Bangkok, convenience sampling, 550 respondents, EV.xlsx. 132 is the Ready-to-Buy Males segment; 100 gym-goers is the Chapter 5 egg-cake survey; ten provinces is Chapter 2."
    },
    {
      "topic": "Ch 4 · Labels in Stata",
      "q": "Which statement about labelling the EV data in Stata matches the slides?",
      "options": [
        "Value labels can only be attached to one variable each",
        "Variable names and labels are the same thing, so changing one changes the other",
        "Likert answers are stored as text, not numbers",
        "For gender, the value label is 1 = male, 2 = female, 3 = LGBTQ+, and a label such as AgreementLabel or YesNoLabel can be applied to multiple variables"
      ],
      "answer": 3,
      "why": "The slides create value labels (gender 1 male, 2 female, 3 LGBTQ+) and note a label like YesNoLabel or AgreementLabel (1 Strongly Disagree … 5 Strongly Agree) can be reused on many variables. You can change a variable’s label but not its name."
    },
    {
      "topic": "Ch 4 · Stata commands",
      "q": "Why does the slide create the intention score with egen intent = rowmean(int1-int5) instead of naming it int?",
      "options": [
        "Because rowmean cannot create variables shorter than 6 letters",
        "Because int already holds the behavior score",
        "Because int is a reserved keyword in Stata used to specify the integer data type",
        "Because the professor prefers longer names"
      ],
      "answer": 2,
      "why": "The slide’s comment: “In STATA, int is a reserved keyword used to specify the integer data type.” So the composite is named intent."
    },
    {
      "topic": "Ch 4 · Stata commands",
      "q": "Which command correctly builds the PBC score?",
      "options": [
        "egen pbc = rowmean(pbc1-pbc5)",
        "egen pbc = rowmean(pbc1-pbc7)",
        "gen pbc = pbc1 + pbc7",
        "reg pbc att sn"
      ],
      "answer": 1,
      "why": "The Chapter 4 questionnaire has seven PBC items, so pbc = (pbc1 + … + pbc7)/7 = rowmean(pbc1-pbc7). Attitude, SN, intention and behavior each have five items."
    },
    {
      "topic": "Ch 4 · Row means",
      "q": "Respondent 001 ticks att1–att5 as 5, 4, 5, 5, 4 on the 5-point Likert scale (5 = Strongly Agree). Their att score is…",
      "options": [
        "4.0",
        "4.6",
        "5.0",
        "23"
      ],
      "answer": 1,
      "why": "Row mean: (5 + 4 + 5 + 5 + 4)/5 = 23/5 = 4.6. 23 is the sum, not the mean."
    },
    {
      "topic": "Ch 4 · Regression (1)",
      "q": "reg intent att sn pbc gives att .3168693, sn .2694953, pbc .2538433, all with P>|t| = 0.000. Which conclusion is on the slide?",
      "options": [
        "All three influence intention, and attitude is the most important factor",
        "Only attitude affects intention",
        "Perceived behavioral control is the most important factor",
        "None is significant because the coefficients are below 1"
      ],
      "answer": 0,
      "why": "All p-values are 0.000 < 0.01 → all significant (***) and positive. Attitude has the largest coefficient (0.317 > 0.269 > 0.254), so it is the most important driver of intention. Coefficient size relative to 1 says nothing about significance."
    },
    {
      "topic": "Ch 4 · Regression (1)",
      "q": "In reg intent att sn pbc, the coefficient on att is 0.317. The best interpretation is…",
      "options": [
        "A 1-point higher attitude score raises the intention score by about 0.32 points, holding sn and pbc constant",
        "31.7% of respondents have a positive attitude",
        "Attitude explains 31.7% of the variation in intention",
        "A 1% rise in attitude raises intention by 0.317%"
      ],
      "answer": 0,
      "why": "A regression coefficient is a slope in the units of the variables (both on the 1–5 scale), holding other regressors constant. The share of variation explained is R² (0.5058 for the whole model), not a coefficient."
    },
    {
      "topic": "Ch 4 · Regression (1)",
      "q": "Equation (1) has R-squared = 0.5058 with 550 observations. This means…",
      "options": [
        "50.58% of respondents intend to buy an EV",
        "att, sn and pbc together explain about 51% of the variation in intention",
        "The model is insignificant",
        "Each variable has a 50.58% chance of being significant"
      ],
      "answer": 1,
      "why": "R² measures goodness of fit: the share of variation in the dependent variable (intent) explained by the regressors. Prob > F = 0.0000 shows the model is significant overall."
    },
    {
      "topic": "Ch 4 · Regression (2)",
      "q": "reg beh intent pbc gives intent .8389568 (p = 0.000) and pbc −.0992519 (p = 0.177). The slide concludes…",
      "options": [
        "PBC strongly reduces purchase behavior",
        "Both intention and PBC are significant at 5%",
        "Intention is the only factor that influences purchase behavior; PBC has no effect on this purchase behavior",
        "Intention has no effect because the constant is significant"
      ],
      "answer": 2,
      "why": "p = 0.177 > 0.10 → fail to reject H0: δ2 = 0, so PBC has no (statistically significant) direct effect — don’t read the negative sign as a real effect. Intention (0.839, p = 0.000) is significant at 1%."
    },
    {
      "topic": "Ch 4 · Indirect effects",
      "q": "Attitude, social norms and PBC do not appear as significant regressors in the behavior equation. How do the slides say they affect buying?",
      "options": [
        "They have no effect on buying at all",
        "Directly, through the constant term",
        "Only through the price of the EV",
        "Indirectly — they raise intention (equation 1), and intention raises behavior (equation 2)"
      ],
      "answer": 3,
      "why": "“Attitude, social norms, and perceived behavioral control indirectly affect how people decide to buy a pure electric vehicle.” The path is att/sn/pbc → intention → behavior."
    },
    {
      "topic": "Ch 4 · Segmentation",
      "q": "tabulate gender int1, row shows 132 of 323 male respondents answered int1 = 5 (Strongly agree). The row percentage the slide highlights is…",
      "options": [
        "24.00%",
        "33.18%",
        "37.82%",
        "40.87%"
      ],
      "answer": 3,
      "why": "Row % = 132/323 ≈ 40.87% of all male respondents. 33.18% is the female share at int1 = 5; 37.82% is the share of all 550 respondents. Because men are more likely to be ready, the target is males with int1 = 5."
    },
    {
      "topic": "Ch 4 · Profiling command",
      "q": "Which Stata command profiles the car debt of the Ready-to-Buy Males segment (N = 132)?",
      "options": [
        "tabulate car_debt if gender == 2 & int1 == 1",
        "reg car_debt gender int1",
        "tabulate car_debt if gender == 1 & int1 == 5",
        "egen car_debt = rowmean(gender int1)"
      ],
      "answer": 2,
      "why": "Ready-to-Buy Males = gender coded 1 (male) AND int1 = 5. Step 3 (profiling) uses if-conditions to scan the selected segment; == is the equality test in Stata."
    },
    {
      "topic": "Ch 4 · Profiling result",
      "q": "88.64% of Ready-to-Buy Males carry car debt and 52.27% owe more than 1,500,000 baht. What is the slide’s key interpretation?",
      "options": [
        "High intention does NOT equal financial ability; traditional advertising or small cash discounts will fail",
        "They lack interest in EVs, so more advertising is needed",
        "They should be excluded from marketing",
        "A small cash discount will convert most of them"
      ],
      "answer": 0,
      "why": "They want the EV today but are trapped by current loans. So the package uses integrated financial engineering: aggressive trade-ins, debt consolidation into the new EV loan, balloon financing/flexible leasing. (88.64 = 100 − 11.36 with no debt.)"
    },
    {
      "topic": "Ch 4 · Profiling result",
      "q": "tabulate pbc5 if gender == 1 & int1 == 5 shows Agree 18.94% and Strongly Agree 71.21%. Which strategy does this finding drive?",
      "options": [
        "Run basic technology-education ads, because most are confused about EVs",
        "Cut the price by a small cash discount",
        "Target female buyers instead",
        "Bundle the EV with a complimentary premium smart home wall charger, because 90.15% are technically confident"
      ],
      "answer": 3,
      "why": "18.94 + 71.21 = 90.15% feel confident in their technical knowledge → no major technology barrier. The slide rewards this readiness with a high-performance smart wall charger (smart scheduling, app control, bi-directional charging)."
    },
    {
      "topic": "Ch 4 · 4Ps",
      "q": "In the 4P table, sn4 (expert/influencer support), att3 (modern & fashionable image) and int4 (willingness to test-drive) are used for which P?",
      "options": [
        "Product",
        "Promotion",
        "Price",
        "Place"
      ],
      "answer": 1,
      "why": "Promotion: Expert Advocacy & VIP Test-Drive Campaign — partner with tech experts, reviewers and lifestyle influencers; VIP home/office test drives. Product uses att1/att4/att5 (family); Price uses att2, pbc1/pbc6, beh3/beh4; Place uses pbc5/pbc7, beh5, beh1/beh2."
    },
    {
      "topic": "Ch 4 · 4Ps",
      "q": "Which tactic does the slide link to the PRICE strategy (att2 “wise purchase”, pbc1/pbc6 budget ready, beh3/beh4 comparing loans and placing deposits)?",
      "options": [
        "A family-centric mobility package with Vehicle-to-Load (V2L)",
        "An interactive TCO (Total Cost of Ownership) calculator and pre-approved bank interest-rate packages",
        "Turning showrooms into Experience Centers with technical specialists",
        "A VIP home/office test-drive service"
      ],
      "answer": 1,
      "why": "Smart Value & Seamless Financing: a TCO calculator shows long-term fuel and maintenance savings (it’s a wise choice) plus exclusive, fast-track bank packages. V2L family package = Product; Experience Centers = Place; VIP test drive = Promotion."
    }
  ],
  "c": [
    {
      "topic": "Ch 5 · WTP",
      "q": "On the Chapter 5 slide, the consumer will pay up to 20 baht for the 1st unit and up to 9 baht for the 10th unit. Willingness to pay (reservation prices) are…",
      "options": [
        "The prices shown on the supply curve",
        "The average price in the market",
        "The cost of producing each unit",
        "The prices shown on the demand curve"
      ],
      "answer": 3,
      "why": "WTP = reservation price = the maximum a consumer will pay for that unit = the height of the demand curve. It falls as more units are bought (20 → 18 → 9)."
    },
    {
      "topic": "Ch 5 · CVM",
      "q": "In the Contingent Valuation Method (CVM), respondents are asked to…",
      "options": [
        "Indicate how much they would pay in the hypothetical scenario presented in the questionnaire",
        "Give four prices: too cheap, cheap, expensive, too expensive",
        "Record what they actually paid last month",
        "Rate their attitude on a 5-point Likert scale"
      ],
      "answer": 0,
      "why": "CVM uses a hypothetical scenario. The four-price question set is Van Westendorp PSM; Likert attitude items are TPB (Chapters 3–4)."
    },
    {
      "topic": "Ch 5 · Double-bounded CVM",
      "q": "With P0 = 60, PL = 40 and PH = 80 baht, a respondent answers “Yes” to “Would you buy at 60 baht?”. What is the second question?",
      "options": [
        "Would you buy it at 40 baht?",
        "Would you buy it at 60 baht again?",
        "Would you still buy it at 80 baht (premium materials, special features)?",
        "No second question is asked"
      ],
      "answer": 2,
      "why": "Double-bounded: each respondent answers two sequential questions. Yes at the initial bid (60) → the higher bid PH = 80. No at 60 → the lower bid PL = 40."
    },
    {
      "topic": "Ch 5 · CVM groups",
      "q": "A respondent answers [no, yes]: no at 60 baht, then yes at 40 baht. Their WTP level, segment and strategy are…",
      "options": [
        "WTP ≥ 80; Premium/Loyal; price skimming",
        "60 ≤ WTP < 80; Value-for-Money; keep the base price",
        "WTP < 40; Non-Consumers; exclude from all marketing communications",
        "40 ≤ WTP < 60; Price-Sensitive/Promotion; occasional discounts, discount codes or a cheaper economy version"
      ],
      "answer": 3,
      "why": "No to 60 means WTP < 60; yes to 40 means WTP ≥ 40. That group is the price-sensitive/promotion segment: short-term sales through discounts, codes or lower-spec versions (which also collect data on them)."
    },
    {
      "topic": "Ch 5 · CVM groups",
      "q": "For the [yes, yes] group (WTP ≥ 80 baht) the slide recommends…",
      "options": [
        "Excluding them from marketing communications",
        "Offering discount codes",
        "Making them the primary target early and offering full-featured premium or luxury versions to maximize profit per unit through price skimming",
        "Keeping the base price and stressing value for money"
      ],
      "answer": 2,
      "why": "[yes, yes] = Premium/Loyal segment → primary target, focus early, premium versions, price skimming. Discount codes are for [no, yes]; value-for-money is [yes, no]; exclusion is [no, no]."
    },
    {
      "topic": "Ch 5 · CVM demand",
      "q": "The CVM survey gives: [yes,yes] → 25% buy at 80 baht; adding [yes,no] → 50% buy at 60 baht. With a target market of 10,000 people, how many people buy at 60 baht?",
      "options": [
        "2,500",
        "5,000",
        "6,000",
        "8,000"
      ],
      "answer": 1,
      "why": "At 60 baht everyone with WTP ≥ 60 buys: [yes,yes] + [yes,no] = 50%. 50% × 10,000 = 5,000. 2,500 is the quantity at 80; 8,000 at 40."
    },
    {
      "topic": "Ch 5 · CVM demand",
      "q": "At 40 baht, 80% of the market would buy ([yes,yes] + [yes,no] + [no,yes]). With 10,000 people, which point is on the market demand curve?",
      "options": [
        "(40, 800)",
        "(40, 8,000)",
        "(80, 8,000)",
        "(40, 2,000)"
      ],
      "answer": 1,
      "why": "0.80 × 10,000 = 8,000 persons at a price of 40. The market curve on the slide: (80, 2,500), (60, 5,000), (40, 8,000). The [no,no] 20% never buy at any of the three prices."
    },
    {
      "topic": "Ch 5 · PSM questions",
      "q": "In Van Westendorp’s PSM, which question describes a price at which the consumer would NOT buy because they doubt the product’s quality?",
      "options": [
        "Too expensive",
        "Too cheap",
        "Expensive",
        "Cheap"
      ],
      "answer": 1,
      "why": "Too cheap (NOT BUY): so cheap you doubt its quality. Too expensive is also NOT BUY but because of price. Expensive and Cheap are BUY answers (still consider buying / a bargain)."
    },
    {
      "topic": "Ch 5 · PSM graphs",
      "q": "Which two PSM curves are plotted as INVERSE (reverse) cumulative frequencies and therefore FALL as price rises?",
      "options": [
        "Cheap and too cheap",
        "Too expensive and expensive",
        "Expensive and cheap",
        "Too expensive and too cheap"
      ],
      "answer": 0,
      "why": "Graph 3 (cheap) and Graph 4 (too cheap) are inverse cumulative: at low prices many people call it cheap/too cheap, and that share fades as price rises. Too expensive and expensive are ordinary cumulative curves that rise."
    },
    {
      "topic": "Ch 5 · PMC",
      "q": "The Point of Marginal Cheapness (PMC) is the intersection of which curves, and what is it in the egg-cake example?",
      "options": [
        "Expensive (BUY) and too cheap (NOT BUY); lower boundary ≈ 68 baht",
        "Too expensive and cheap; upper boundary ≈ 92 baht",
        "Cheap and expensive; ≈ 83 baht",
        "Too cheap and too expensive; 70–80 baht"
      ],
      "answer": 0,
      "why": "PMC = Graph 2 (expensive) ∩ Graph 4 (too cheap) → the lower boundary of the acceptable range (≈ 68). Below it, more people think the product is “too cheap to buy” than “expensive”, and view it with suspicion."
    },
    {
      "topic": "Ch 5 · PME",
      "q": "The Point of Marginal Expensiveness (PME) is…",
      "options": [
        "The intersection of too cheap and expensive; ≈ 68 baht",
        "The intersection of too expensive and cheap; the upper boundary, ≈ 92 baht",
        "The price that maximizes revenue, 70 baht",
        "The intersection of cheap and expensive; ≈ 83 baht"
      ],
      "answer": 1,
      "why": "PME = Graph 1 (too expensive) ∩ Graph 3 (cheap) → upper boundary (≈ 92). Above it (e.g. at 100) most people say it is too expensive and demand falls quickly. Acceptable range = (PMC, PME) = 68–92 baht."
    },
    {
      "topic": "Ch 5 · OPP",
      "q": "The Optimal Price Point (OPP) is the intersection of ____ and is described as the price that ____.",
      "options": [
        "cheap and expensive; most people think is normal for the market",
        "expensive and too cheap; marks the lower boundary",
        "too expensive and too cheap; minimizes consumer resistance so the widest audience is reached",
        "too expensive and cheap; marks the upper boundary"
      ],
      "answer": 2,
      "why": "OPP = the two NOT BUY curves (too expensive × too cheap). It prevents rejection from either side. In the egg-cake data the two curves only meet near 0% around 70–80 baht, so OPP is between 70 and 80. “The price most people think is normal” describes IDP."
    },
    {
      "topic": "Ch 5 · IDP",
      "q": "Which statement about the Indifference Price Point (IDP) is correct?",
      "options": [
        "It is the intersection of the two NOT BUY curves",
        "It is always the lowest acceptable price",
        "It is where revenue is maximized",
        "It is where the number who think the price is expensive about equals the number who think it is cheap; often used as the “current market price” (≈ 83 baht in the egg-cake case)"
      ],
      "answer": 3,
      "why": "IDP = cheap (Graph 3) ∩ expensive (Graph 2) — the two BUY curves. It represents the price most people consider normal; used as the current market price or to highlight good value and a positive brand image."
    },
    {
      "topic": "Ch 5 · Egg-cake data",
      "q": "In the High-Protein Egg Cake PSM survey (100 respondents), a respondent’s data were discarded when…",
      "options": [
        "They answered the survey online",
        "They gave an intent score of 3",
        "Their answers did not follow the order Too cheap < Cheap < Expensive < Too expensive",
        "They chose a price above 100 baht"
      ],
      "answer": 2,
      "why": "Logical answers must satisfy too cheap < cheap < expensive < too expensive; any respondent who broke the order was dropped. Intent scores of 1–3 just get a weight of 0 in NMS."
    },
    {
      "topic": "Ch 5 · NMS",
      "q": "What does the Newton–Miller–Smith (NMS) model add to the four PSM questions?",
      "options": [
        "Two questions on how likely the respondent is to buy at their own “cheap” price and at their own “expensive” price (1–5 or 0–100%)",
        "A question on income and a question on gender",
        "A double-bounded yes/no bid",
        "Two questions on the competitor’s price"
      ],
      "answer": 0,
      "why": "NMS adds two intent-to-purchase questions (intent_cheap and intent_expen). They turn the PSM price answers into purchase probabilities, giving a demand curve and a revenue curve."
    },
    {
      "topic": "Ch 5 · NMS price grid",
      "q": "The lowest price in the egg-cake data is 42 baht (rounded down to 40) and the highest is 158 (rounded up to 160). With 12 price intervals, the prices on the demand curve are…",
      "options": [
        "40, 52, 64, …",
        "40, 50, 60, …, 160",
        "42, 52, 62, …, 158",
        "40, 60, 80, …, 160"
      ],
      "answer": 1,
      "why": "Interval = (Pmax − Pmin)/12 = (160 − 40)/12 = 120/12 = 10 → 40, 50, 60, …, 160."
    },
    {
      "topic": "Ch 5 · NMS weights",
      "q": "At a test price of 80 baht, respondent 4 has cheap = 80, expensive = 108, intent_cheap = 5 and intent_expen = 4. Their purchase probability is…",
      "options": [
        "0%",
        "30%",
        "50%",
        "70%"
      ],
      "answer": 2,
      "why": "80 lies between cheap (80) and expensive (108), so average the weights: score 5 → 0.70, score 4 → 0.30; (70% + 30%)/2 = 50%. If 80 were outside that range the probability would be 0%."
    },
    {
      "topic": "Ch 5 · NMS demand shape",
      "q": "On the NMS demand curve for the egg cake, purchase probability RISES from 40 to 70 baht. The slide’s explanation is…",
      "options": [
        "The law of demand always holds",
        "Students have more income at lower prices",
        "Stata made a calculation error",
        "At 40–70 baht consumers doubt the quality (hormones, counterfeit, close to expiry), and these doubts reduce the likelihood of purchase"
      ],
      "answer": 3,
      "why": "Prices that are too low trigger quality suspicion — the same idea as the “too cheap” PSM question. So the lower the price in that range, the lower the probability that an individual will purchase."
    },
    {
      "topic": "Ch 5 · Revenue index",
      "q": "Expected revenue index per customer = Price × Probability of purchase. Using the NMS table (50 → 13.4%, 70 → 35.1%, 80 → 29.65%, 90 → 17.85%), which price maximizes expected revenue per customer?",
      "options": [
        "50 baht",
        "70 baht",
        "80 baht",
        "90 baht"
      ],
      "answer": 1,
      "why": "70 × 35.1 = 2,457 is the largest (80 × 29.65 = 2,372; 90 × 17.85 = 1,606.5; 50 × 13.4 = 670). The slide: price the product at 70 baht/unit to maximize expected revenue per customer."
    },
    {
      "topic": "Ch 5 · Market forecast",
      "q": "The target population is 72,000 Kasetsart students and the revenue index at 70 baht is about 2,450. Total estimated revenue is about…",
      "options": [
        "17,640,000 baht",
        "176,400,000 baht",
        "1,764,000,000 baht",
        "2,522,000 baht"
      ],
      "answer": 1,
      "why": "2,450 × 72,000: 2,450 × 72 = 171,500 + 4,900 = 176,400, then × 1,000 → 176,400,000 baht. Market demand at each price is likewise 72,000 × the purchase probability."
    }
  ]
};
