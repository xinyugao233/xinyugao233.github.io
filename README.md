# Xinyu Gao Academic Website

Static GitHub Pages website for Xinyu Gao. The site is built with plain HTML, CSS, and JavaScript, with `index.html` as the entry point.

The current version uses a traditional academic-homepage layout inspired by academic profile templates: a top navigation bar, a left profile sidebar, and separate pages for About, Research, Publications, Teaching, and Contact. There is no music or concert section.

## Files

- `index.html`: Main About page
- `research.html`: Research page
- `publications.html`: Publications page
- `teaching.html`: Teaching page
- `contact.html`: Contact page
- `styles.css`: Visual design and responsive layout
- `script.js`: Mobile navigation and copy-email interaction
- `.nojekyll`: Disables Jekyll processing on GitHub Pages
- `assets/`: Put your CV here as `assets/Xinyu_Gao_CV.pdf`

## Local Preview

Open `index.html` directly in a browser, or serve the folder locally with a simple static server if you prefer.

## Customize Before Publishing

1. Add your CV file at `assets/Xinyu_Gao_CV.pdf`.
2. Update page content in `index.html`, `research.html`, `publications.html`, `teaching.html`, or `contact.html` as needed.
3. If you want a headshot instead of the monogram badge, replace the `.profile-avatar` block in each page with an image element and adjust the CSS if needed.

## Deploy on GitHub Pages

1. Create a GitHub repository named `xinyugao233.github.io`.
2. Copy these files into that repository root.
3. Push the files to the `main` branch.
4. In GitHub, go to `Settings > Pages`.
5. Set the source to deploy from the `main` branch root.
6. The website will appear at `https://xinyugao233.github.io`.

## Notes

- No build step is required.
- The site is mobile responsive and ready for GitHub Pages static hosting.
- `.nojekyll` is included so GitHub Pages serves the files as-is.
