# ChainScope

**Supply Chain Intelligence & Industry Insights**

ChainScope is a responsive website for learning supply-chain fundamentals, exploring industry/company ecosystems, and understanding the business implications of international industry developments.

## Modules
- **Supply Chain Academy** — SCM fundamentals, procurement, inventory, planning, risk and data analytics.
- **Industry & Company Map** — semiconductor, automotive and electronics value-chain overviews with company profiles.
- **Industry Intelligence** — editorial analysis templates for supply-chain news and business implications.

## Run locally
No dependencies or build process are required.

1. Download or clone this repository.
2. Open `index.html` in a browser.

For a local development server, run:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Publish on GitHub Pages
1. Create a GitHub repository named `chainscope`.
2. Upload all files in this project to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under Build and deployment, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for the deployment workflow to finish. The public URL will appear in the Pages settings.

## Content integrity
Some Industry Intelligence cards are explicitly marked as research-topic examples / analysis frameworks, not verified current news. Add the original source URL and publication date before publishing any news item as factual reporting. Do not infer direct supplier relationships from general industry adjacency.

## Project guidance
Read [`AGENTS.md`](./AGENTS.md) before asking an AI coding agent to modify this repository.
