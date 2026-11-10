# AGENTS.md — ChainScope

## 1. Project purpose
ChainScope is a Traditional-Chinese-first Supply Chain Intelligence website.
It connects three learning and research layers:
1. Supply Chain Academy — concepts, processes, procurement, inventory, planning, risk and analytics.
2. Industry & Company Map — industry value chains, company profiles and carefully verified ecosystem relationships.
3. Industry Intelligence — weekly international industry news and business-impact analysis.

The initial focus is Semiconductor, Automotive, Electronics and Logistics.

## 2. Current implementation
- Static website using HTML, CSS and vanilla JavaScript.
- No build step, package manager, database, authentication or API is required.
- `index.html` is the entry point.
- `styles.css` contains design tokens, layout and responsive styles.
- `app.js` contains page rendering, demo content and client-side interactions.
- `README.md` contains setup, publishing and contribution instructions.

Do not migrate frameworks or add dependencies unless the user explicitly requests it or a clear technical need is documented.

## 3. Design direction
- Professional editorial / business-intelligence aesthetic.
- Primary palette: deep navy, off-white, muted teal and restrained blue/gold accents.
- Keep typography, spacing, borders and card styles consistent.
- Traditional Chinese is the primary interface language; retain standard English supply-chain terminology where useful.
- Responsive layouts must work on desktop, tablet and mobile.
- Avoid decorative animations, excessive gradients and generic dashboard clutter.
- Preserve accessible contrast, semantic HTML, visible focus states and meaningful button labels.

## 4. Content architecture
### Academy
Every knowledge topic should include:
- Definition and key concepts.
- Practical business application.
- Related methods, KPIs or analytical tools.
- Difficulty level and topic category.

### Industry & Company Map
Every industry profile should include:
- Industry overview.
- Clearly labeled value-chain stages.
- Representative companies and their roles.
- Relevant procurement / supply-chain considerations.

Every company profile should include:
- Company overview and business role.
- Supply-chain and procurement focus.
- Research notes and sources when factual claims are added.

### Industry Intelligence
Every published news analysis should include:
1. Headline and publication date.
2. What happened — factual summary.
3. Why it matters.
4. Supply-chain impact: demand, supply, cost, lead time and risk.
5. Business implications for procurement, inventory, capacity or supplier management.
6. Personal insight / research question.
7. Original source links and source-verification notes.

## 5. Data integrity and research rules
- Never invent a supplier, customer, partnership, financial figure, event, quote or news date.
- An industry value-chain relationship is not proof of a direct commercial relationship between two companies.
- Distinguish:
  - Verified fact: directly supported by an authoritative source.
  - Industry inference: reasoned interpretation, explicitly labeled.
  - Scenario / illustrative data: hypothetical, explicitly labeled.
- Prefer company filings and official announcements, government and industry bodies, then reputable international media.
- Every news item must show its original publication date and link to the source.
- Cross-check material claims with primary sources where possible.
- If a claim cannot be verified, omit it or mark it as unverified; never fill gaps with confident-sounding guesses.
- Do not label demo content as current news. Replace sample/demo copy before presenting it as a live weekly briefing.

## 6. Code conventions
- Use readable, descriptive names.
- Keep content data separate from rendering functions where practical.
- Use semantic HTML elements and valid attributes.
- Avoid `eval`, unsafe HTML injection and unnecessary global variables.
- Escape or sanitize externally sourced content before rendering it into HTML.
- All buttons and links must have a working action or destination.
- Keep CSS responsive and avoid fixed-width layouts that break on mobile.
- Do not introduce dependencies without documenting why they are needed.

## 7. Development workflow
Before editing:
1. Read this file and `README.md`.
2. Inspect the existing project structure.
3. Identify the page, data and components affected.
4. Keep changes scoped to the requested feature.

After editing:
1. Open `index.html` in a browser or run a local static server.
2. Test all navigation items.
3. Test search and category filters.
4. Test industry switching and company detail views.
5. Test article detail views.
6. Check desktop and mobile layouts.
7. Check the browser console for errors.
8. Verify that all external links work and all factual content has sources.

## 8. Git and deployment
- Keep the default branch deployable.
- Use focused commits with descriptive messages.
- Do not commit secrets, API keys, credentials or private data.
- For GitHub Pages, publish the repository root (or configure the Pages source explicitly).
- Verify the public URL after deployment; do not claim deployment succeeded until the URL is reachable.

## 9. MVP scope
Prioritize a complete, responsive and navigable website.
Do not add authentication, a complex backend, user accounts, paid APIs or automated AI news generation in the MVP.
