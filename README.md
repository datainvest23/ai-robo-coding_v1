# Inventor Path — Interactive Course Prototype

This repository now contains a responsive, browser-based prototype that converts the long-form `Course_Content.md` curriculum into an interactive course shell.

## Current progress

- Responsive layout with sidebar + content area.
- Modularized course data (module → lessons) in `data/course.js`.
- Interactive lesson cards and lesson detail view.
- Basic quiz widget per lesson (where quiz data exists).
- Local progress tracking (localStorage) with completion percentage.

## Run locally

Because this uses plain HTML/CSS/JS, you can open `index.html` directly or serve the folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Next continuation items

1. Expand all lessons from `Course_Content.md` into the course data model.
2. Add richer interactions (drag/drop sequence, code challenges, checklist submission).
3. Add accessibility review and keyboard-only test coverage.
4. Add optional instructor/parent dashboard.
