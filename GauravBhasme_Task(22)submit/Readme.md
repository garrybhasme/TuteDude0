# GauravBhasme Task 22

A static landing page built with Tailwind CSS for an AI workspace/demo website. The page includes a sticky navigation header, hero section, call-to-action buttons, and decorative status cards.

## Features

- Sticky top navigation with menu links and a CTA button
- Hero section with bold headings and description text
- Two action buttons side by side for user engagement
- Decorative info cards positioned using utility classes
- Tailwind CSS styling with custom utility classes defined in `style.css`

## Tech Stack

- HTML5
- Tailwind CSS v4
- Vanilla CSS / custom Tailwind utilities

## Files

- `index.html` — main page layout
- `style.css` — Tailwind input file with custom utilities and `@import "tailwindcss"`
- `output.css` — generated Tailwind stylesheet used by the page
- `package.json` — project dependencies for Tailwind CLI

## How to run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Generate `output.css` if it is not already built:
   ```bash
   npx tailwindcss -i ./style.css -o ./output.css --minify
   ```
3. Open `index.html` in your browser.

## Notes

- The page is static and does not have backend functionality.
- If the buttons overlap, remove `absolute` from their classes and use flex utilities like `justify-center` or `gap-4`.
- Make sure `output.css` is up-to-date with Tailwind build output before previewing.

## License

This project is provided as-is for learning and practice.
