# Design Document: Legal Pages

## Overview

This feature adds two standalone legal pages to the get2know website: Privacy Policy and Terms and Conditions. These pages provide essential legal information to users about data handling practices and service terms. The design follows the existing website's visual system, ensuring a consistent user experience while prioritizing readability for legal content.

### Key Design Principles

1. **Consistency**: Match the existing design system (fonts, colors, spacing, components)
2. **Readability**: Optimize typography and layout for long-form legal content
3. **Accessibility**: Ensure semantic HTML and keyboard navigation support
4. **Responsiveness**: Provide optimal reading experience across all device sizes
5. **Navigation**: Clear paths to and from legal pages via footer links

## Architecture

### Page Structure

Both legal pages follow a consistent three-part structure:

```
┌─────────────────────────────────┐
│         Header                  │  ← Logo + link to homepage
├─────────────────────────────────┤
│                                 │
│         Main Content            │  ← Legal text content
│                                 │
├─────────────────────────────────┤
│         Footer                  │  ← Copyright + navigation links
└─────────────────────────────────┘
```

### File Structure

```
/
├── index.html              (existing - update footer)
├── success.html            (existing - update footer)
├── privacy.html            (new)
├── terms.html              (new)
└── css/
    └── styles.css          (existing - add legal page styles)
```

### Navigation Flow

```
┌──────────────┐
│  index.html  │
└──────┬───────┘
       │
       ├─────► Footer links ─────┐
       │                         │
       ▼                         ▼
┌──────────────┐          ┌──────────────┐
│ privacy.html │          │  terms.html  │
└──────┬───────┘          └──────┬───────┘
       │                         │
       └─────► Logo click ───────┘
                   │
                   ▼
            ┌──────────────┐
            │  index.html  │
            └──────────────┘
```

## Components and Interfaces

### 1. Legal Page Header Component

**Purpose**: Provides branding and navigation back to homepage

**Structure**:
```html
<header class="legal-header">
  <div class="legal-header__container">
    <a href="index.html" class="legal-header__logo">
      get2kn<span class="legal-header__logo-accent">o</span>w
    </a>
  </div>
</header>
```

**Styling**:
- Background: `var(--color-bg)` (warm sand)
- Logo font: Plus Jakarta Sans, 800 weight, 1.35rem
- Logo accent color: `var(--color-brand)` (terracotta)
- Padding: 2rem vertical, responsive horizontal
- Border bottom: 1px solid `var(--color-border)`

### 2. Legal Content Container Component

**Purpose**: Contains and formats the legal text content

**Structure**:
```html
<main class="legal-main">
  <div class="legal-container">
    <h1 class="legal-title">[Page Title]</h1>
    <div class="legal-content">
      [Legal content with semantic HTML]
    </div>
  </div>
</main>
```

**Styling**:
- Max width: 800px (optimized for reading)
- Padding: 4rem vertical, responsive horizontal
- Background: `var(--color-bg)`
- Typography:
  - Title (h1): Fraunces, 3rem, 800 weight
  - Headings (h2): Fraunces, 1.75rem, 700 weight
  - Body text: Plus Jakarta Sans, 1.125rem, 500 weight
  - Line height: 1.8 (enhanced readability)
  - Color: `var(--color-heading)` for headings, `var(--color-body)` for text

### 3. Footer Component (Enhanced)

**Purpose**: Provides copyright info and navigation links to legal pages

**Structure**:
```html
<footer class="footer">
  <div class="footer__container">
    <p class="footer__copy">&copy; 2026 get2know. All rights reserved.</p>
    <nav class="footer__links" aria-label="Footer navigation">
      <a href="privacy.html">Privacy</a>
      <a href="terms.html">Terms &amp; Conditions</a>
      <a href="contact.html">Contact</a>
    </nav>
  </div>
</footer>
```

**Updates Required**:
- Update all existing pages (index.html, success.html) with new footer links
- Update href attributes: `/privacy` → `privacy.html`, `/terms` → `terms.html`
- Maintain existing styling and responsive behavior

## Data Models

### Legal Page Content Model

```typescript
interface LegalPage {
  title: string;              // "Privacy Policy" or "Terms and Conditions"
  pageTitle: string;          // Full page title for <title> tag
  metaDescription: string;    // SEO meta description
  lastUpdated: string;        // "April 2026"
  sections: Section[];        // Array of content sections
}

interface Section {
  heading: string;            // Section heading (h2)
  content: string | string[]; // Paragraph(s) or list items
  subsections?: Section[];    // Optional nested sections (h3)
}
```

### Content Structure

**Privacy Policy** (`privacy.html`):
- Title: "Privacy Policy - get2know"
- Meta description: "Learn how get2know collects, uses, and protects your personal data in accordance with UK GDPR and EU GDPR."
- Sections: 16 main sections (as provided in user content)

**Terms and Conditions** (`terms.html`):
- Title: "Terms and Conditions - get2know"
- Meta description: "Read the terms and conditions governing the use of get2know, including user responsibilities, payments, and service limitations."
- Sections: 18 main sections (as provided in user content)

## Error Handling

### Missing Page Handling

**Scenario**: User navigates to non-existent legal page
**Solution**: Rely on browser's default 404 handling (no custom 404 page in scope)

### Broken Links

**Scenario**: Footer links point to incorrect URLs
**Prevention**: 
- Use relative paths (`privacy.html`, `terms.html`)
- Test all navigation links before deployment
- Validate HTML structure

### Content Display Issues

**Scenario**: Legal content doesn't render correctly on mobile
**Prevention**:
- Use responsive typography (clamp functions)
- Test on multiple device sizes
- Ensure proper viewport meta tag

## Testing Strategy

This feature involves static HTML pages with no complex logic or data transformations. Property-based testing is **not applicable** for the following reasons:

1. **Static Content**: The pages display fixed legal text with no dynamic behavior
2. **UI Rendering**: Testing focuses on visual layout and styling, not computational properties
3. **No Input Variation**: There are no inputs that vary meaningfully to test
4. **Configuration Validation**: The pages are simple HTML structure, not configuration

### Recommended Testing Approach

**Unit Tests**: Not applicable (no JavaScript logic)

**Integration Tests**: Not applicable (no backend integration)

**Manual Testing Checklist**:

1. **Visual Consistency**
   - [ ] Legal pages match design system (fonts, colors, spacing)
   - [ ] Header logo displays correctly
   - [ ] Footer matches existing pages
   - [ ] Content is readable and well-formatted

2. **Navigation**
   - [ ] Logo links to homepage from legal pages
   - [ ] Footer links navigate to correct pages
   - [ ] All pages include updated footer with legal links
   - [ ] Back button works correctly

3. **Responsiveness**
   - [ ] Pages display correctly on mobile (320px - 767px)
   - [ ] Pages display correctly on tablet (768px - 1023px)
   - [ ] Pages display correctly on desktop (1024px+)
   - [ ] Typography scales appropriately
   - [ ] No horizontal scrolling

4. **Accessibility**
   - [ ] Semantic HTML elements used (header, main, footer, nav)
   - [ ] Heading hierarchy is correct (h1 → h2 → h3)
   - [ ] Links have descriptive text
   - [ ] Keyboard navigation works for all interactive elements
   - [ ] Color contrast meets WCAG AA standards
   - [ ] Lang attribute present on html element

5. **SEO and Metadata**
   - [ ] Page titles are correct and unique
   - [ ] Meta descriptions are present
   - [ ] Viewport meta tag is present
   - [ ] Favicon reference is correct

6. **Content Accuracy**
   - [ ] Privacy Policy content matches provided text
   - [ ] Terms and Conditions content matches provided text
   - [ ] Last updated date is correct
   - [ ] Contact email is correct (hello@monkeynutsstudio.co.uk)
   - [ ] Company information is accurate

**Browser Testing**:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

**Validation**:
- [ ] HTML validates (W3C validator)
- [ ] CSS validates (W3C CSS validator)
- [ ] No console errors
- [ ] Links are not broken (link checker)

### Testing Notes

Since this feature is purely presentational with no business logic, automated testing provides minimal value. The focus should be on:
- **Visual regression testing** (manual or screenshot comparison)
- **Cross-browser compatibility testing**
- **Accessibility audits** (Lighthouse, axe DevTools)
- **Manual user flow testing**

## Implementation Notes

### Content Formatting Strategy

The provided legal content is in plain text format. During implementation:

1. **Parse the content** to identify sections and subsections
2. **Apply semantic HTML**:
   - Main headings (e.g., "1. About Us") → `<h2>`
   - Subsections (e.g., "Acceptance Criteria") → `<h3>`
   - Paragraphs → `<p>`
   - Lists → `<ul>` or `<ol>` where appropriate
3. **Preserve structure** while enhancing readability
4. **Add spacing** between sections for visual clarity

### CSS Organization

Add new styles to `css/styles.css` following the existing pattern:

```css
/* ============================================
   Legal Pages
   ============================================ */
.legal-header { /* ... */ }
.legal-main { /* ... */ }
.legal-container { /* ... */ }
.legal-title { /* ... */ }
.legal-content { /* ... */ }
.legal-content h2 { /* ... */ }
.legal-content h3 { /* ... */ }
.legal-content p { /* ... */ }
.legal-content ul { /* ... */ }
.legal-content a { /* ... */ }
```

### Responsive Breakpoints

Follow existing breakpoints:
- Mobile: `max-width: 767px`
- Tablet: `768px - 1023px`
- Desktop: `min-width: 1024px`

### Performance Considerations

- **No additional assets**: Legal pages use existing fonts and styles
- **Minimal CSS**: Reuse design system tokens
- **No JavaScript**: Static HTML only
- **Fast load times**: Text-only content with minimal overhead

## Deployment Checklist

1. [ ] Create `privacy.html` with formatted content
2. [ ] Create `terms.html` with formatted content
3. [ ] Add legal page styles to `css/styles.css`
4. [ ] Update footer in `index.html`
5. [ ] Update footer in `success.html`
6. [ ] Test all navigation links
7. [ ] Validate HTML and CSS
8. [ ] Test responsive behavior
9. [ ] Run accessibility audit
10. [ ] Deploy to production

## Future Enhancements

Potential improvements outside current scope:

1. **Version History**: Track changes to legal documents over time
2. **Acceptance Tracking**: Log when users accept terms (requires backend)
3. **Multi-language Support**: Translate legal pages for international users
4. **Print Styles**: Optimize CSS for printing legal documents
5. **Table of Contents**: Add jump links for long legal documents
6. **Search Functionality**: Allow users to search within legal text
