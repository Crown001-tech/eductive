Read this fully before writing any copy or building any section. These rules override your defaults. If a rule here conflicts with what you would normally do, follow this file.

1. Who we are talking to
Readers are Nigerian school owners, principals, bursars and admin staff. They are busy and read on phones.
They know: fee receipts, class registers, result slips, term names, JSS and SS classes, WhatsApp.
They do not want: tech talk, buzzwords, long explanations.
Reading level: a smart 15-year-old should understand every sentence on the first read.

2. Plain words only

Use everyday words. If a simpler word exists, use it.

Never use these words (or anything like them): synergy, leverage, holistic, seamless, robust, scalable, ecosystem, paradigm, streamline, empower, orchestrate, unlock, elevate, revolutionize, cutting-edge, next-generation, best-in-class, end-to-end, frictionless, ideate, operationalize, utilize, facilitate, bespoke, curated, ubiquitous, cadence, landscape, journey, pivotal, myriad, plethora, delve, tapestry, testament

Swap these:

| Don't write | Write |
|---|---|
| utilize | use |
| facilitate | help |
| streamline | simplify, or just say what gets faster |
| leverage | use |
| comprehensive | full |
| institutional records | school records |
| operational efficiency | less paperwork |
| stakeholders | parents, teachers, owners (name them) |

Other word rules:
- One meaning per word. If a word could be read two ways, rewrite the sentence.
- No jargon unless the reader already says it (Term 2, CA, bursar, JSS 2 are fine).
- No abbreviations the reader has to decode. If you must use one, write it in full once.
- Do not invent product terms. Use the names in section 7 only.
- Prefer short words and short sentences. Aim for 8 to 14 words per sentence. Never go past 20.
- Active voice. Say who does what: "Parents see results on WhatsApp."

3. Copy limits (hard caps)

Count the words. If a block is over the cap, cut it. Do not ask for permission to cut.

| Element | Maximum |
|---|---|
| Hero headline | 8 words (already written: do not change it) |
| Hero subtext | 20 words |
| Section heading | 6 words |
| Section intro line | 18 words |
| Card title | 4 words |
| Card description | 15 words |
| Button label | 3 words |
| Feature chip or tag | 2 words |
| Any single paragraph | 2 sentences |
| Any section's total text | 60 words, not counting card text |

Rules that follow from the caps:
- One idea per section. If you have two ideas, make two sections.
- Never explain what the page already shows. If an image or card makes the point, delete the sentence.
- Never repeat the same point in a heading, a paragraph and a card. Say it once, in the strongest place.
- No introductions ("Welcome to...", "In today's world...") and no summaries ("In short...").
- No filler lists. Three items beats six. Never pad to reach a round number.
- Do not write long testimonials, long "about us" text or long feature explanations on the page. If detail is needed, put it behind a "See how it works" link, not on the page.

4. Keep each screen calm

An overwhelming page is a failed page. Before adding anything, ask: "Does this help the reader take the next step?" If not, leave it out.

- One focus per screen. Each section gets one headline, one short line, one visual, and at most one button.
- One primary button per screen. Every other action is a quiet text link.
- Max 3 floating cards or artifacts visible at once in any one view.
- Max 3 to 4 items in any row or grid on desktop. Max 1 per row on mobile.
- Whitespace is a feature. Leave generous space around the headline and the button. Do not fill empty areas just because they are empty.
- Max 2 type sizes of body text per section and max 2 font families on the whole site.
- Max 3 colours per section from the palette (see section 6).
- No text on top of faces, hands or other text. Cards and labels must never cover people's faces or collide with headlines or paragraphs.
- Section order is a story, not a menu. One section answers one question the reader has. Do not add sections "for completeness".
- No AI eyebrow pill tags or badges (e.g. rounded containers with colored dots like '● HOW IT WORKS' or '● FREQUENTLY ANSWERED QUESTIONS'). Section headlines must stand cleanly on their own with generous whitespace.
- When unsure, remove. Less is the default.

5. Motion rules
- Motion must explain something (a payment arriving, a record updating). If it only decorates, remove it.
- Maximum one thing moving at a time in the reader's main view, apart from slow idle movement.
- Animate only transform and opacity. Keep durations between 0.3 and 0.8 seconds. Idle loops stay subtle (4 to 8 px).
- Always respect prefers-reduced-motion: show the final state, no movement.
- Never block the reader. No long intros, no scroll-jacking that traps the page, no auto-playing sound.
- The connecting line and thread animation must pass behind people and cards, never across faces or text.

5A. Scroll feel (smooth, sleek, never bland)

Goal: scrolling should feel like moving through one connected story, not jumping between separate boxes. It must also stay calm. Every rule in sections 4 and 5 still applies.

Smooth movement
- Use Lenis for smooth scrolling on desktop mouse and trackpad (lerp about 0.1, or duration about 1.1 seconds). On phones and touch screens use normal native scroll. Do not smooth it.
- Connect Lenis to GSAP ScrollTrigger (or Framer Motion useScroll) so every effect reads from one scroll source. Never run two scroll systems.
- Stay at 60 fps. Animate only transform and opacity. Never animate width, height, top, left, margins or box-shadow on scroll. Use will-change only on the few items that are moving.
- Never take control from the reader. No scroll-jacking, no forced snapping, no changing wheel speed, and no pinned section longer than 1.5 screens. The reader can always scroll past quickly.

One easing, one speed
- Use the same easing for every scroll animation: cubic-bezier(0.22, 1, 0.36, 1). Use 0.6 to 0.9 seconds for reveals. Mixed easings make a page feel cheap.

Between sections (no hard edges)
Sections must never just stop and start. Join them in one of these ways, and use each way no more than twice on the whole site:
1. The next section slides up and over the one before it, with soft rounded top corners.
2. The background colour shifts slowly (green to white) as the reader scrolls across the border.
3. The connecting line from the hero runs across the border and arrives at the next section's label.
4. The connecting line: it draws as the reader scrolls (stroke tied to scroll progress). It starts dashed and becomes solid. It is curved, never straight. It passes behind people and cards, never across faces or text. A small glowing dot leads it, and each section it reaches gets a small pulse.

Inside sections
- Reveal on entry: headline lines rise from a mask, the visual fades in and rises about 24 px, and the button comes last. Stagger by 0.08 to 0.12 seconds.
- Light parallax only: background layers move 10 to 15 percent slower than the page. No parallax on text.
- At most one pinned story section on the whole site (for example the payment, receipt and ledger sync). Everything else scrolls normally.
- Numbers and proof moments (a balance, the PAID stamp) animate once, when they enter the screen.
- Show progress with the connecting line or a thin progress bar. Not both.

Keep it light
- Nothing moves while the reader is still reading a headline. Let the headline land first, then add movement.
- Do not animate every element. If everything moves, nothing stands out. Per screen: one main move and one small supporting move.
- Test on a mid-range Android phone. If scrolling is not smooth, remove effects until it is.
- Respect prefers-reduced-motion: turn off smooth scrolling, parallax and line drawing, and show the final state.
- Preload the hero images, lazy-load everything below the first screen, and reserve image space so nothing jumps.

6. Design guardrails
- Colours: deep forest green background, emerald highlight, terracotta orange for the main button only. Do not add new accent colours.
- Buttons: pill shape, sentence case, one consistent label style site-wide ("Book a demo"). No uppercase buttons.
- Cards: show real school paper, not generic dashboards: fee receipt, class register, result slip, WhatsApp message. No generic charts or "98% growth" style numbers.
- Numbers and names: use Naira (₦), real class names (JSS 2 Gold, SS 1 B), Nigerian names, and Term names. Amounts must agree across cards (the payment on the notice equals the receipt amount).
- Text size: body text at least 16 px. Small card text at least 11 px. Trust line and chips must be readable at a glance.
- Contrast: meet WCAG AA. Check text on both the green and the white side of the diagonal.
- Layout: position floating cards relative to their image container, not the screen. Test at 1280, 1440, 1536 and 1920 px wide, and on a phone.
- No placeholder or broken assets. If an image fails to load, hide it. Never show an empty grey box.

7. Approved names
Use only these names for features: Leadership, Attendance, Assessment, Bursar fees. Product name: EDUCTIVE. Demo showcase school: Oakland School (Oakland Comprehensive High School).

8. How you work with me
- Do the work, then tell me briefly. Give a 2 to 4 line summary of what changed. No long essays about your process.
- Do not add features, sections or copy I did not ask for. If you think something is missing, suggest it in one line and wait.
- Change only what I asked. Do not rewrite or restyle other parts of the page.
- If a request is unclear, ask one short question. Do not guess and build a large thing.
- No emojis in page copy.
- If a rule in this file blocks what I asked, say so in one line and ask which wins.

9. Checklist before you say "done"
Go through every line. Fix anything that fails.
- [ ] Would a busy principal understand every line in one read?
- [ ] Is any word on the banned list, or any word I would not say out loud?
- [ ] Is every block under its word cap?
- [ ] Does each screen have one focus and one primary button?
- [ ] Are there more than 3 cards or floating items in one view?
- [ ] Does anything cover a face, a headline or a paragraph?
- [ ] Is there any sentence that repeats what a visual already shows? Delete it.
- [ ] Do the numbers and names agree across all cards?
- [ ] Does it still look good on a phone?
- [ ] Did I add anything that was not requested? Remove it.
- [ ] Does scrolling feel smooth, with no jumps and no hard edge between sections?
- [ ] Is there only one scroll system, one easing, and at most one pinned section?

10. Example: bad copy vs good copy

Bad (too long, vague, uncommon words):
Our comprehensive, end-to-end platform seamlessly orchestrates your institution's operational workflows, empowering stakeholders to leverage real-time data for holistic decision-making.

Good:
Attendance, results and fees in one place. Built for Nigerian schools.

Bad (a section with four paragraphs and six points).

Good (a section):
Heading: Fees you can trust
Line: Every payment is recorded the moment it arrives.
Visual: the receipt card
Link: See how it works

Short, clear and calm beats complete.
