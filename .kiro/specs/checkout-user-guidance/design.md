# Design Document

## Overview

This design covers the changes needed to support the Event Pack purchase flow on the get2know static marketing site. The scope includes:

1. **Stripe Payment Link swap** — Replace the placeholder `href` on the Event Pack buy button with the real Stripe test Payment Link URL.
2. **Guest limit update** — Change "200" to "250" in three text locations (Event Pack card, Weddings card, Birthdays card).
3. **Remove "Light & Dark mode theme"** — Delete the `<li>` element from the Event Pack feature list.
4. **Email guidance note** — Add a new visual element inside the Event Pack card, between the feature list and the buy button, reminding users to use their get2know account email at Stripe checkout.
5. **Success page** — Create `success.html` at the site root, reusing existing design tokens and fonts, to serve as the Stripe post-payment redirect destination.
6. **Preserve JSON-LD** — No changes to the structured data block.
7. **Enterprise tier** — No changes.

Items 1–3 and 6–7 are trivial text/attribute edits. The design focuses on the two items requiring real decisions: the email guidance note (Requirement 4) and the success page (Requirement 5).

## Architecture

The site architecture remains unchanged: a single `index.html`, a single `css/styles.css`, and static assets in `public/`. The only structural addition is `success.html` at the root.

```
project root
├── index.html          ← modified (items 1–4)
├── success.html        ← new (item 5)
├── css/
│   └── styles.css      ← modified (new classes for guidance note + success page)
└── public/
    └── images/         ← unchanged
```

No new JavaScript is required. No build tools, frameworks, or backend changes are involved.

## Components and Interfaces

### 1. Stripe Payment Link Swap (Requirement 1)

**Change:** In `index.html`, replace the `href` value on the Event Pack buy button anchor.

```html
<!-- Before -->
<a href="https://buy.stripe.com/YOUR_PAYMENT_LINK_ID" class="pricing__cta pricing__cta--primary" target="_blank" rel="noopener">Get the event pack</a>

<!-- After -->
<a href="https://buy.stripe.com/test_dRm00j6M189aexM7XV2oE00" class="pricing__cta pricing__cta--primary" target="_blank" rel="noopener">Get the event pack</a>
```

The `target="_blank"` and `rel="noopener"` attributes are already present and remain unchanged.

### 2. Guest Limit Update (Requirement 2)

**Change:** Text-only edits in three locations within `index.html`:

| Location | Before | After |
|---|---|---|
| Event Pack card feature list | `Up to 200 guests` | `Up to 250 guests` |
| Weddings event card | `Works for up to 200 Guests (Event pack)` | `Works for up to 250 Guests (Event pack)` |
| Birthdays event card | `Works for up to 200 Guests (Event pack)` | `Works for up to 250 Guests (Event pack)` |

### 3. Remove "Light & Dark mode theme" (Requirement 3)

**Change:** Delete the entire `<li>` element containing "Light & Dark mode theme" from the Event Pack card's `<ul class="pricing__features">`. All other list items remain untouched.

### 4. Email Guidance Note (Requirement 4)

This is the first item requiring a design decision.

**Placement:** Inside the Event Pack card (`article.pricing__card--highlighted`), between the `<ul class="pricing__features">` and the `<a class="pricing__cta">` buy button. This positions the note exactly where the user's eye travels before clicking "Get the event pack."

**HTML structure:**

```html
<p class="pricing__guidance">
  <svg class="pricing__guidance-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
       aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
  Use the same email as your get2know account at checkout.
</p>
```

**Design rationale:**
- A `<p>` element is semantically correct for a short instructional note.
- An inline info-circle SVG icon provides a visual cue that this is guidance, not a feature.
- The icon uses `aria-hidden="true"` since the text is self-explanatory.
- BEM class `pricing__guidance` follows the existing naming convention within the `pricing` block.

**CSS styling (new classes in `styles.css`):**

```css
.pricing__guidance {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-brand-dark);
  background: rgba(196, 98, 45, 0.08);
  border-radius: 0.625rem;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.pricing__guidance-icon {
  flex-shrink: 0;
  margin-top: 1px;
  color: var(--color-brand);
}
```

**Visual design decisions:**
- **Background:** A subtle terracotta tint (`rgba(196, 98, 45, 0.08)`) makes the note visually distinct from the feature list without being jarring. It echoes the brand colour at very low opacity.
- **Text colour:** `var(--color-brand-dark)` (#A04E22) provides strong contrast against the near-white card background (`var(--color-card)` = `#FEFDFB`). The contrast ratio is approximately 4.8:1, exceeding WCAG AA requirements for normal text.
- **Font size:** 0.8125rem (13px) is smaller than the feature list items (1rem) to signal this is supplementary guidance, not a feature.
- **Border radius:** 0.625rem is slightly smaller than the card's `var(--radius-xl)` (1.5rem), keeping the note visually subordinate.
- **Spacing:** `margin-bottom: 1.5rem` provides breathing room before the buy button, matching the existing `margin-bottom: 2rem` on `.pricing__features` for a balanced layout.

### 5. Success Page (Requirement 5)

**File:** `success.html` at the project root.

**Page structure:**

```
<!doctype html>
<html lang="en">
<head>
  <!-- Same meta tags, fonts, and stylesheet as index.html -->
  <title>Payment Successful - get2know</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <main class="success">
    <div class="success__container">
      <a href="index.html" class="success__logo">get2kn<span class="success__logo-accent">o</span>w</a>
      <div class="success__icon">✓ (SVG checkmark)</div>
      <h1 class="success__heading">Payment successful!</h1>
      <p class="success__message">Thank you for purchasing the Event Pack. Check your email for confirmation and next steps.</p>
      <a href="index.html" class="success__cta">Back to homepage</a>
    </div>
  </main>
</body>
</html>
```

**Design rationale:**
- **Standalone page:** No navbar or footer — this is a transient confirmation page, not a browsable part of the site. Keeping it minimal reduces maintenance and avoids confusing navigation state after an external redirect from Stripe.
- **Centred layout:** The content is vertically and horizontally centred on the viewport, creating a focused, calm confirmation experience.
- **Logo link:** The get2know wordmark at the top links back to `index.html`, providing a familiar anchor and an additional way to navigate home.
- **Success icon:** A large green checkmark circle using the existing `--color-check` (#5A9E7E) token reinforces the positive outcome.
- **CTA button:** A prominent "Back to homepage" button using the brand CTA style (`--color-brand-cta`) gives users a clear next action.
- **Same stylesheet:** The page loads `css/styles.css` to inherit all design tokens, fonts, and base resets. New success-page-specific classes are added to the stylesheet.

**CSS styling (new classes in `styles.css`):**

```css
/* Success Page */
.success {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg);
  padding: 2rem;
}

.success__container {
  text-align: center;
  max-width: 520px;
}

.success__logo {
  font-family: var(--font-body);
  font-weight: 800;
  font-size: 1.35rem;
  color: var(--color-heading);
  letter-spacing: -0.02em;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 2.5rem;
}

.success__logo-accent {
  color: var(--color-brand);
}

.success__icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(90, 158, 126, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.success__icon svg {
  color: var(--color-check);
}

.success__heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 800;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.success__message {
  font-size: 1.125rem;
  color: var(--color-body);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.success__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--transition);
  border-radius: var(--radius-pill);
  padding: 0.85rem 2rem;
  background: var(--color-brand-cta);
  color: var(--color-white);
}

.success__cta:hover {
  background: var(--color-brand-hover);
  transform: scale(1.03);
}

.success__cta:active {
  transform: scale(0.98);
}
```

### 6. Preserve JSON-LD (Requirement 6)

No changes. The existing `<script type="application/ld+json">` block in `index.html` remains exactly as-is, with the Event Pack offer at price "29.99" / currency "GBP" and the Free tier at price "0".

### 7. Enterprise Tier (Requirement 7)

No changes. The Enterprise Pack card retains its "COMING SOON" ribbon and has no purchase button.

## Data Models

No data models are involved. The site is fully static HTML/CSS with no data persistence, no API calls, and no client-side state beyond the existing scroll-reveal and mobile-menu JavaScript.

The only "data" is the Stripe Payment Link URL, which is a static string embedded in the HTML anchor's `href` attribute.

## Error Handling

Error handling is minimal given the static nature of the changes:

| Scenario | Handling |
|---|---|
| Stripe Payment Link is unreachable | Out of scope — Stripe handles availability. The link opens in a new tab, so the marketing site remains unaffected. |
| User navigates to `success.html` directly (without completing payment) | The page displays the same thank-you message. This is acceptable for a static site with no server-side session validation. Stripe's own confirmation email serves as the authoritative purchase receipt. |
| CSS fails to load on success page | The page degrades gracefully to unstyled but readable HTML with semantic structure. |

## Testing Strategy

Since this feature involves only static HTML/CSS changes with no application logic, functions, or data transformations, **property-based testing is not applicable**. There are no pure functions, no input/output behaviour to vary, and no universal properties to verify across generated inputs. The changes are declarative markup and styling, which fall into the "UI rendering and layout" category.

### Recommended Testing Approach

**Manual visual testing:**
- Verify the Event Pack buy button opens the correct Stripe URL in a new tab.
- Verify all three guest limit text changes read "250" instead of "200".
- Verify the "Light & Dark mode theme" line item is removed from the Event Pack card.
- Verify the email guidance note is visible, styled correctly, and positioned between the feature list and buy button.
- Verify `success.html` renders correctly with centred layout, checkmark icon, thank-you message, and working homepage link.
- Verify the JSON-LD block is unchanged (inspect page source).
- Verify the Enterprise card is unchanged.

**Responsive testing:**
- Check the email guidance note and success page at mobile (375px), tablet (768px), and desktop (1200px+) breakpoints.

**Accessibility testing:**
- Verify the email guidance note has sufficient colour contrast (target: WCAG AA, 4.5:1 for normal text).
- Verify `success.html` has correct `lang`, `charset`, `viewport`, and `title` attributes.
- Run a screen reader pass on the guidance note to confirm the text is announced clearly.

**Link validation:**
- Confirm the Stripe Payment Link URL is correct and resolves.
- Confirm the "Back to homepage" link on `success.html` navigates to `index.html`.
