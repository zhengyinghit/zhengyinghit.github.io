# Academic Homepage (Jekyll + GitHub Pages)

A clean, single-page academic homepage built with **Jekyll** and deployed to
**GitHub Pages**. All content lives in **Markdown** and **BibTeX** files — you
never edit the templates, CSS, or JavaScript.

## Features

- One page, four sections: **About · News · Publications · Service**
- Header links scroll to each section (no extra pages)
- Publications rendered automatically from a single BibTeX file, with
  PDF / DOI / arXiv / Code / Slides / Abstract / BibTeX links
- Responsive, dark mode, copy-to-clipboard BibTeX

## Quick start (local preview)

Requires Ruby **3.x** and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

---

## Editing content

### 1. Profile — `index.md`

The front matter (the YAML block between the two `---` lines) controls your
name, role, affiliation, email, photo, and link buttons. The body is ordinary
Markdown and is your bio.

```yaml
name: "Jane Q. Researcher"
role: "Assistant Professor"
department: "Department of Computer Science"
institution: "Example University"
email: "jane@example.edu"
photo: "/assets/img/profile.svg"
links:
  - label: "Google Scholar"
    url: "https://scholar.google.com/citations?user=..."
  - label: "GitHub"
    url: "https://github.com/..."
```

Site title/description live in `_config.yml` (`title`, `description`).

### 2. News — `_news/`

One Markdown file per item; `date` controls ordering (newest first).

```markdown
---
title: "Paper accepted at NeurIPS 2024"
date: 2024-09-15
category: "Publication"
---
```

`category` is optional (e.g. Publication, Award, Talk).

### 3. Publications — `_bibliography/references.bib`

Standard BibTeX entries. Extra display-only fields add link buttons and are
stripped from the copied BibTeX:

| Field | Purpose |
|-------|---------|
| `abstract = {…}` | Abstract toggle |
| `award = {…}` | Badge (e.g. `Spotlight`) |
| `pdf`, `arxiv`, `code`, `website`, `slides`, `poster`, `video`, `supplement` | Link buttons |

```bibtex
@inproceedings{doe2023generalization,
  title     = {Understanding Generalization in Large Language Models},
  author    = {Doe, Jane and Smith, John},
  booktitle = {Advances in Neural Information Processing Systems (NeurIPS)},
  year      = {2023},
  doi       = {10.0000/neurips.2023.120},
  award     = {Spotlight},
  pdf       = {https://example.com/paper.pdf},
  code      = {https://github.com/example/repo}
}
```

`arxiv` may be a bare ID (`2401.12345`) or a full URL.

### 4. Academic service — `_service/`

```markdown
---
role: "Program Committee"
venue: "NeurIPS"
year: 2024
url: "https://neurips.cc"   # optional
---
```

---

## Deploying to GitHub Pages

1. Push the folder to the `main` branch of a repository.
2. **Settings → Pages → Source → "GitHub Actions"**.
3. Set `url:` in `_config.yml` to your site URL
   (`https://<username>.github.io` for a user site). `baseurl` is handled by
   the workflow — leave it empty.

The included workflow (`.github/workflows/deploy.yml`) builds with
Jekyll + `jekyll-scholar` (not on Pages' allowed-plugin list, hence the
Actions build) and deploys on every push.

## Project structure

```
.
├── _config.yml              # site settings, nav anchors, scholar config
├── index.md                 # ← profile + bio (the single page)
├── _news/                   # ← news items (Markdown)
├── _service/                # ← service (Markdown)
├── _bibliography/           # ← publications (BibTeX)
├── _layouts/                # templates (do not edit)
├── _includes/               # partials (do not edit)
├── assets/                  # CSS, JS, images
└── .github/workflows/       # GitHub Pages deployment
```

## Customization

- **Site title / description**: `_config.yml`
- **Section order / nav labels**: the `navigation:` list in `_config.yml`
  (anchor IDs: `#about`, `#news`, `#publications`, `#service`)
- **Colors & dark mode**: CSS variables at the top of `assets/css/main.scss`
- **Citation style**: `scholar.style:` in `_config.yml`
