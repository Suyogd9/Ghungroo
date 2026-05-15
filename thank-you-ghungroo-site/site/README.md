# Thank You, Ghungroo

A little something I made for you, in code.

## Structure

```
.
├── index.html              # Home page (the Ghungroo intro)
├── assets/
│   ├── styles.css          # Design system
│   └── script.js           # Nav + interactions
└── pages/
    ├── about-you.html      # 01 · About You
    ├── my-intent.html      # 02 · My Intent
    ├── visa.html           # 03 · The H-4 Bit
    ├── your-channel.html   # 04 · Your Channel
    ├── studies.html        # 05 · Studies
    ├── the-path.html       # 06 · The Path
    └── date.html           # 07 · A Date?
```

## Deploy to GitHub Pages (free, takes ~5 min)

1. **Create a new repo** on GitHub. Name it whatever — `for-you`, `ghungroo`, or even something neutral like `personal-site`.

2. **Upload all these files** to the repo (web UI or git). Keep the folder structure exactly as it is.

3. **Enable Pages:** Repo → **Settings** → **Pages** → under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** / folder: **/ (root)**
   - Click **Save**

4. Wait 1–2 minutes. Your site will be live at:
   `https://<your-github-username>.github.io/<repo-name>/`

5. Send her the link. That's it.

## Before you deploy — find & replace these placeholders

- `[Your name]` (in `index.html` footer)
- `[state]` (in `pages/studies.html` — the state you're in)
- `[Family situation]` (in `pages/my-intent.html` — replace with the specific family context, or remove)

Use Ctrl/Cmd+Shift+F in VS Code or your editor's project-wide find & replace.

## Run locally first (optional)

```bash
# any tiny static server works. Examples:
python3 -m http.server 8000
# then open http://localhost:8000
```

## Tech notes

- No build step. No framework. Just HTML, CSS, JS.
- Fonts loaded from Google Fonts (Caprasimo, Fraunces, Caveat).
- Fully responsive — works on mobile.
- The Ghungroo on the home page jingles on hover.
- The RSVP on the date page is interactive (client-side only — no data is sent anywhere).
