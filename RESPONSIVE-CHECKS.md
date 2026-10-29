# Responsive verification

The entire page was measured in Chrome using the production Next.js output at frame widths of 320, 360, 375, 390, 430, 550, 600, 750, 768, 820, 1024, 1280, 1440, and 1920 CSS pixels. Desktop scrollbars reduce available content width slightly.

- No document-level horizontal overflow or content extending beyond the viewport at the tested widths.
- Inspected sibling layout geometry across hero, countdown, couple, event grid, gallery heading, invitation, venue, RSVP, form rows and footer. Gallery captions intentionally overlay their photographs.
- Visually reviewed small-phone hero, event cards, original invitation dialog and RSVP/footer.
- Confirmed mobile menu opens and closes after navigation.
- Confirmed phone lightbox fits its viewport, changes photos and closes with Escape.
- Confirmed invitation dialog fits horizontally and provides a close button and download link.
- Confirmed RSVP preview displays its no-submission message after valid input.
- Inputs use 16px text on phones to avoid iOS focus zoom; controls have at least 44px target height.
- Dialogs use dynamic viewport height and vertical scrolling; narrow grids stack without fixed widths.
- Motion effects have reduced-motion alternatives. Essential content does not require hover.
- Next.js production build and TypeScript checking pass.

These are browser viewport checks, not certification on every physical device or browser. Physical iOS/Safari and Android hardware were unavailable. RSVP remains preview-only.
