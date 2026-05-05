# CLAUDE.md

## Project Overview
- **Purpose:** Personal and professional developer portfolio showcasing skills, projects, and identity.
- **Tone:** Clean, engineered, professional, concise.
- **Do not change:** Only modify files relevant to the current task unless explicitly instructed.

## Tech Stack
- **Primary:** HTML, CSS, JavaScript
- **Future:** Optional frameworks (React/Vue), Node.js backend, deployment (Vercel/Netlify)

## Repository Structure
- **index.html** — landing page
- **/assets/** — images, logos, icons
- **/css/** — `style.css`, `theme.css`, component styles
- **/js/** — `script.js`, `ui.js`, `slider.js`
- **/sections/** — partials: about.html, projects.html, contact.html
- **Dan-Portfolio.md** — workflow, changelog, prompting rules
- **theme.config.json** — machine-readable theme tokens and flags

## Theme Colors and Tokens
- **Primary Green:** `#2f6b2f` (replace all orange uses)
- **Primary Hover:** `#245a24` (darker hover)
- **Accent Light:** `#7fbf7f` (for subtle highlights)
- **Text Primary:** `#0f1720`
- **Background:** `#ffffff`
- **Muted:** `#6b7280`

**CSS variables example**
```css
:root{
  --color-primary: #2f6b2f;
  --color-primary-hover: #245a24;
  --color-accent: #7fbf7f;
  --text: #0f1720;
  --bg: #ffffff;
  --muted: #6b7280;
}
