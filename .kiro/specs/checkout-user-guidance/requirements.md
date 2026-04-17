# Requirements Document

## Introduction

This feature updates the get2know marketing site to support the Event Pack purchase flow via Stripe Payment Links. The changes include wiring up the real Stripe test Payment Link, updating guest limits from 200 to 250, removing the obsolete "Light & Dark mode theme" line item, adding email guidance for users before they click through to Stripe checkout, and creating a basic success page for post-purchase redirect. The site remains fully static with no backend.

## Glossary

- **Marketing_Site**: The static get2know marketing website (`index.html`, `css/styles.css`, and associated assets) served without a backend or JavaScript framework.
- **Pricing_Section**: The "Simple pricing" section of the Marketing_Site containing the Free, Event Pack, and Enterprise pricing cards.
- **Event_Pack_Card**: The highlighted pricing card in the Pricing_Section that displays Event Pack features, price, and the purchase button.
- **Buy_Button**: The call-to-action link on the Event_Pack_Card that directs users to the Stripe Payment Link for purchasing the Event Pack.
- **Email_Guidance_Note**: A visible text element displayed near the Buy_Button that instructs users to use the same email as their get2know game account at Stripe checkout.
- **Events_Section**: The "Perfect for any celebration" section of the Marketing_Site containing the Weddings and Birthdays event cards.
- **Success_Page**: A standalone HTML page (`success.html`) that Stripe redirects users to after a successful payment.
- **Stripe_Payment_Link**: The static Stripe-hosted URL (`https://buy.stripe.com/test_dRm00j6M189aexM7XV2oE00`) that handles Event Pack checkout without requiring a backend.

## Requirements

### Requirement 1: Stripe Payment Link Integration

**User Story:** As a site visitor, I want the Event Pack buy button to link to the real Stripe checkout, so that I can purchase the Event Pack directly from the marketing site.

#### Acceptance Criteria

1. WHEN a visitor clicks the Buy_Button, THE Marketing_Site SHALL open the Stripe_Payment_Link (`https://buy.stripe.com/test_dRm00j6M189aexM7XV2oE00`) in a new browser tab.
2. THE Buy_Button SHALL include `target="_blank"` and `rel="noopener"` attributes on the anchor element.
3. THE Buy_Button SHALL replace the placeholder URL `https://buy.stripe.com/YOUR_PAYMENT_LINK_ID` with the real Stripe_Payment_Link URL.

### Requirement 2: Update Guest Limit to 250

**User Story:** As a site visitor, I want to see the correct guest limit for the Event Pack, so that I have accurate information before purchasing.

#### Acceptance Criteria

1. THE Event_Pack_Card SHALL display "Up to 250 guests" in the feature list, replacing the previous "Up to 200 guests" text.
2. THE Events_Section Weddings card SHALL display "Works for up to 250 Guests (Event pack)" replacing the previous "200" value.
3. THE Events_Section Birthdays card SHALL display "Works for up to 250 Guests (Event pack)" replacing the previous "200" value.

### Requirement 3: Remove Light & Dark Mode Theme Line Item

**User Story:** As a site visitor, I want the pricing card to reflect current features accurately, so that I know exactly what the Event Pack includes.

#### Acceptance Criteria

1. THE Event_Pack_Card SHALL NOT display the "Light & Dark mode theme" line item in the feature list.
2. THE Event_Pack_Card SHALL retain all other existing feature list items unchanged after the removal.

### Requirement 4: Email Guidance Note

**User Story:** As a site visitor about to purchase the Event Pack, I want to be reminded to use my get2know account email at checkout, so that my purchase is linked to the correct account.

#### Acceptance Criteria

1. THE Marketing_Site SHALL display the Email_Guidance_Note within the Event_Pack_Card, positioned between the feature list and the Buy_Button.
2. THE Email_Guidance_Note SHALL contain text instructing the user to use the same email address as their get2know game account when completing checkout.
3. THE Email_Guidance_Note SHALL be visually distinct from the feature list items so that visitors notice the guidance before clicking the Buy_Button.
4. THE Email_Guidance_Note SHALL be accessible, using appropriate semantic HTML and sufficient colour contrast against the card background.

### Requirement 5: Success Page

**User Story:** As a visitor who has just completed a purchase, I want to see a confirmation page, so that I know my payment was successful and I can navigate back to the site or app.

#### Acceptance Criteria

1. THE Success_Page SHALL be a standalone HTML file named `success.html` located at the site root.
2. THE Success_Page SHALL display a thank-you message confirming the purchase was successful.
3. THE Success_Page SHALL include a visible link that navigates the user back to the Marketing_Site homepage (`index.html`).
4. THE Success_Page SHALL use the same visual styling (fonts, colours, layout tokens) as the Marketing_Site for a consistent user experience.
5. THE Success_Page SHALL be a valid, accessible HTML document with appropriate `lang`, `charset`, `viewport`, and `title` attributes.

### Requirement 6: Preserve Existing Structured Data

**User Story:** As a site maintainer, I want the JSON-LD structured data to remain accurate, so that search engines continue to index the correct product information.

#### Acceptance Criteria

1. THE Marketing_Site SHALL retain the existing JSON-LD structured data with the Event Pack offer price of "29.99" and currency "GBP" unchanged.
2. THE Marketing_Site SHALL NOT modify the Free tier offer in the JSON-LD structured data.

### Requirement 7: Enterprise Tier Unchanged

**User Story:** As a site visitor, I want the Enterprise tier to remain clearly marked as coming soon, so that I understand it is not yet available for purchase.

#### Acceptance Criteria

1. THE Pricing_Section SHALL continue to display the Enterprise Pack card with the "COMING SOON" ribbon.
2. THE Pricing_Section SHALL NOT add a purchase button or link to the Enterprise Pack card.
