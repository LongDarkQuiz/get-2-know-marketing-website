# Implementation Plan: Checkout User Guidance

## Overview

Update the get2know static marketing site to support the Event Pack purchase flow. This involves swapping the placeholder Stripe URL with the real test Payment Link, updating guest limits from 200 to 250, removing the obsolete "Light & Dark mode theme" feature, adding an email guidance note to the Event Pack card, and creating a post-payment success page. All changes are HTML/CSS only — no backend, no build tools, no frameworks.

## Tasks

- [x] 1. Update Event Pack buy button and feature list in index.html
  - [x] 1.1 Replace the placeholder Stripe URL with the real Payment Link
    - In `index.html`, change the Event Pack buy button `href` from `https://buy.stripe.com/YOUR_PAYMENT_LINK_ID` to `https://buy.stripe.com/test_dRm00j6M189aexM7XV2oE00`
    - Keep `target="_blank"` and `rel="noopener"` attributes unchanged
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 1.2 Update guest limit from 200 to 250 in all three locations
    - In the Event Pack pricing card feature list, change "Up to 200 guests" to "Up to 250 guests"
    - In the Weddings event card, change "Works for up to 200 Guests (Event pack)" to "Works for up to 250 Guests (Event pack)"
    - In the Birthdays event card, change "Works for up to 200 Guests (Event pack)" to "Works for up to 250 Guests (Event pack)"
    - _Requirements: 2.1, 2.2, 2.3_

  - [x] 1.3 Remove "Light & Dark mode theme" line item from Event Pack card
    - Delete the entire `<li>` element containing "Light & Dark mode theme" from the Event Pack card's `<ul class="pricing__features">`
    - Verify all other feature list items remain unchanged
    - _Requirements: 3.1, 3.2_

- [x] 2. Add email guidance note to Event Pack card
  - [x] 2.1 Insert the email guidance note HTML in index.html
    - Add a `<p class="pricing__guidance">` element inside the Event Pack card (`article.pricing__card--highlighted`), between the `<ul class="pricing__features">` and the `<a class="pricing__cta">` buy button
    - Include the inline info-circle SVG icon with `aria-hidden="true"` and the text "Use the same email as your get2know account at checkout."
    - Use the HTML structure from the design document (Section 4)
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

  - [x] 2.2 Add CSS styles for the email guidance note
    - Add `.pricing__guidance` and `.pricing__guidance-icon` classes to `css/styles.css`
    - Use `rgba(196, 98, 45, 0.08)` background tint, `var(--color-brand-dark)` text colour, `0.8125rem` font size
    - Ensure the note is visually distinct from the feature list with flex layout, gap, and rounded corners
    - _Requirements: 4.3, 4.4_

- [x] 3. Checkpoint — Verify index.html changes
  - Ensure all changes to index.html are correct: Stripe URL updated, guest limits show 250 in all three places, "Light & Dark mode theme" removed, email guidance note visible between feature list and buy button. Verify JSON-LD structured data is unchanged and Enterprise card is untouched. Ask the user if questions arise.
  - _Requirements: 6.1, 6.2, 7.1, 7.2_

- [x] 4. Create the success page
  - [x] 4.1 Create success.html at the site root
    - Create `success.html` as a standalone HTML page with proper `lang="en"`, `charset`, `viewport`, and `<title>Payment Successful - get2know</title>` attributes
    - Include the same font imports and link to `css/styles.css`
    - Build the page body with: centred layout using `<main class="success">`, the get2know logo linking to `index.html`, a green checkmark icon circle, an `<h1>` heading "Payment successful!", a confirmation paragraph, and a "Back to homepage" CTA button linking to `index.html`
    - Use the HTML structure from the design document (Section 5)
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [x] 4.2 Add CSS styles for the success page
    - Add all success page classes to `css/styles.css`: `.success`, `.success__container`, `.success__logo`, `.success__logo-accent`, `.success__icon`, `.success__heading`, `.success__message`, `.success__cta`
    - Use `min-height: 100vh` with flexbox centering, `var(--color-bg)` background, `max-width: 520px` container
    - Style the checkmark icon with `rgba(90, 158, 126, 0.12)` background circle and `var(--color-check)` colour
    - Style the CTA button with `var(--color-brand-cta)` background, pill border-radius, and hover/active states
    - _Requirements: 5.4_

- [x] 5. Final checkpoint — Verify all changes
  - Ensure all changes are complete and correct. Verify `success.html` renders with centred layout, checkmark, thank-you message, and working homepage link. Confirm the email guidance note has sufficient colour contrast. Verify no unintended changes to JSON-LD or Enterprise card. Ask the user if questions arise.
  - _Requirements: 1.1–1.3, 2.1–2.3, 3.1–3.2, 4.1–4.4, 5.1–5.5, 6.1–6.2, 7.1–7.2_

## Notes

- No property-based tests or unit tests are applicable — this is a static HTML/CSS site with no application logic
- All changes are declarative markup and styling; verification is visual/manual
- The JSON-LD structured data block must remain completely untouched
- The Enterprise Pack card must remain unchanged with its "COMING SOON" ribbon
