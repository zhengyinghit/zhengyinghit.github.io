# Academic Homepage (Jekyll + GitHub Pages)

A clean, responsive academic homepage built with **Jekyll** and deployed to
**GitHub Pages**. All content is edited through **Markdown** and **BibTeX**
files — you never need to touch the HTML, CSS, or templates.

## Features

- **Profile & bio** — edited in [`index.md`](index.md)
- **News** — one Markdown file per item in [`_news/`](_news/)
- **Publications** — a single BibTeX file in
  [`_bibliography/references.bib`](_bibliography/references.bib), rendered
  automatically (with PDF / DOI / arXiv / code / slides / abstract / BibTeX links)
- **Projects** — Markdown files in [`_projects/`](_projects/)
- **Academic service** — Markdown files in [`_service/`](_service/)
- **Teaching** — Markdown files in [`_teaching/`](_teaching/)
- Responsive layout, dark mode, copy-to-clipboard BibTeX, mobile navigation

---

## Quick start (local preview)

Requires Ruby **3.x** and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>. The site rebuilds automatically as you edit files.

---

## Editing content (no code changes needed)

### 1. Profile & bio — `index.md`

The **front matter** (the YAML block between the two `---` lines) controls your
name, role, affiliation, contact details, photo, and the link buttons. The
**body** is ordinary Markdown and is your bio.

```yaml
name: "Jane Q. Researcher"
role: "Assistant Professor"
department: "Department of Computer Science"
institution: "Example University"
email: "jane@example.edu"
photo: "/assets/img/profile.svg"
links:
  - label: "Email"
    url: "mailto:jane@example.edu"
  - label: "CV"
    url: "/assets/files/cv.pdf"
  - label: "Google Scholar"
    url: "https://scholar.google.com/citations?user=..."
```

Drop your photo in `assets/img/` and update `photo:`.

### 2. News — `_news/`

Add a Markdown file per item. The file name becomes its URL, and `date` controls
the ordering (newest first).

```markdown
---
title: "Paper accepted at NeurIPS 2024"
date: 2024-09-15
category: "Publication"
---
Optional details…
```

### 3. Publications — `_bibliography/references.bib`

Add standard BibTeX entries. Two extras make the page nicer:

| Field | Purpose |
|-------|---------|
| `selected = {true}` | Featured on the homepage under *Selected Publications* |
| `abstract = {…}` | Shown behind an *Abstract* toggle |
| `award = {…}` | Small badge (e.g. `Spotlight`, `Best Paper`) |
| `pdf`, `arxiv`, `code`, `website`, `slides`, `poster`, `video`, `supplement` | Extra link buttons (stripped from the copied BibTeX) |

```bibtex
@inproceedings{doe2023generalization,
  title     = {Understanding Generalization in Large Language Models},
  author    = {Doe, Jane and Smith, John},
  booktitle = {Advances in Neural Information Processing Systems (NeurIPS)},
  year      = {2023},
  doi       = {10.0000/neurips.2023.120},
  selected  = {true},
  award     = {Spotlight},
  pdf       = {https://example.com/paper.pdf},
  code      = {https://github.com/example/repo}
}
```

`arxiv` may be a bare ID (`2401.12345`) or a full URL.

### 4. Projects — `_projects/`

```markdown
---
title: "Fast Attention"
date: 2024-05-01
status: "active"          # active | completed | archived
tagline: "One-line summary"
links:
  - label: "Paper"
    url: "https://example.com/paper.pdf"
  - label: "Code"
    url: "https://github.com/example/repo"
---
Longer description shown on the project's own page.
```

### 5. Academic service — `_service/`

```markdown
---
role: "Program Committee"
venue: "NeurIPS"
year: 2024
url: "https://neurips.cc"   # optional
---
```

### 6. Teaching — `_teaching/`

```markdown
---
title: "Machine Learning"
semester: "Spring"
year: 2024
role: "Instructor"
date: 2024-01-15
---
Course description…
```

---

## Deploying to GitHub Pages

1. Create a repository and push this folder (the contents, not a subfolder) to
   the `main` branch.

2. Enable Pages for the **GitHub Actions** source:

   **Settings → Pages → Source → "GitHub Actions"**.

3. The included workflow (`.github/workflows/deploy.yml`) builds the site with
   Jekyll + `jekyll-scholar` and deploys it automatically on every push to
   `main`.

4. Update `url:` in [`_config.yml`](_config.yml) to your real URL:

   - User/org site: `https://<username>.github.io`
   - Project site: `https://<username>.github.io/<repo>`

   `baseurl` is handled automatically by the workflow, so leave it empty.

> **Why a custom build?** `jekyll-scholar` is not on GitHub Pages' allowed-plugin
> list, so the site is built by a GitHub Actions workflow (the officially
> supported "custom build" path) and the result is published to Pages.

---

## Project structure

```
.
├── _config.yml              # site-wide settings, collections, scholar config
├── index.md                 # ← your profile + bio (homepage)
├── news.md / publications.md / projects.md / service.md / teaching.md
├── _layouts/                # page templates (do not edit)
├── _includes/               # reusable partials (do not edit)
├── _news/                   # ← news items (Markdown)
├── _projects/               # ← projects (Markdown)
├── _service/                # ← service (Markdown)
├── _teaching/               # ← teaching (Markdown)
├── _bibliography/           # ← publications (BibTeX)
├── assets/                  # CSS, JS, images, CV
└── .github/workflows/       # GitHub Pages deployment
```

## Customization

- **Site title / description**: [`_config.yml`](_config.yml)
- **Colors & dark mode**: CSS variables at the top of `assets/css/main.scss`
- **Navigation links**: the `navigation:` list in [`_config.yml`](_config.yml)
- **Citation style**: the `scholar.style:` setting (e.g. `apa`,
  `chicago-author-date`) in [`_config.yml`](_config.yml)
