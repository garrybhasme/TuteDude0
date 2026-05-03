# Laundry Service Landing Page

A responsive laundry service landing page built with HTML, CSS, and JavaScript. This project demonstrates responsive Flexbox layout, dynamic service selection, cart management, booking form validation, and footer content.

## Features

- Responsive hero section and navbar built with CSS Flexbox.
- Service list with Add / Remove actions for each item.
- Dynamic cart summary with total amount calculation.
- Booking form with required field validation.
- EmailJS integration scaffold for booking confirmation emails.
- Footer section with brand details, important links, contact info, and social icons.
- Smooth transitions and responsive behavior across desktop, tablet, and mobile screens.

## How to Run

1. Open `index.html` in a browser.
2. Use the Services table to add items to the cart.
3. Fill in the booking form fields and click **Book Now**.

## Project Structure

- `index.html` — page markup and content structure.
- `style.css` — responsive layout, Flexbox styling, and visual theme.
- `script.js` — service management, cart updates, and booking form logic.
- `Readme.md` — project documentation.

## Responsive Design Approach

- The navbar uses `display: flex` with `justify-content: space-between` and `align-items: center` for a modern responsive layout.
- The hero section uses Flexbox to display the text and image side-by-side on larger screens and stack vertically on small screens.
- CSS variables are used for breakpoint values and colors to improve maintainability.
- Media queries at `768px` and `480px` adjust layout, typography, and spacing for tablets and phones.

## Booking Flow

- The booking section is wrapped in a real `<form>` element.
- Browser validation is used to ensure Full Name, Email, and Phone Number are filled before submission.
- The submit handler also checks that the cart contains selected services before completing the booking flow.
- A confirmation message displays after a successful booking action.

## Notes

- EmailJS is included as a scaffold in `script.js`, but service IDs must be configured before real email sending will work.
- The project uses a placeholder booking message and includes the required cleanup of the cart and form fields on success.

## Improvements

- Replace placeholder EmailJS keys with real values in `script.js`.
- Add real social media icon images or font icons.
- Enhance accessibility by adding form labels to all inputs and ensuring focus states are visible.
- Add a mobile menu toggle for very narrow screens.
