PATCH: CTA + Intake (drop-in, no deletions)
===============================================

What this includes
------------------
1) /intake.html — a working intake form (posts to Formspree). Replace the endpoint if you have your own.
2) /assets/styles-cta.css — styles for CTAs and non-clickable badges/pills.
3) Instructions to wire the new CTAs in your header and hero **without** changing your layout.

Steps
-----
A) Add the new CSS reference in <head> of **index.html** (and any other page that shows the badges/pills):

  <link rel="stylesheet" href="/assets/styles-cta.css">

B) Make the hero buttons and the new header CTA point to the intake page.
   In your header nav, add this right edge button (keep your existing links):

  <a class="cta-primary" href="/intake.html">Start your intake</a>

   In your hero section, ensure the primary button uses:
  <a class="cta-primary" href="/intake.html">Start Your Intake</a>

C) Ensure the 'All‑in $5,000', 'Attorney‑led filings', 'NYSCEF / EDDS', 'All five boroughs' badges are *spans*, not links,
   and mark them non-interactive:

  <span class="pill" aria-disabled="true">All‑in $5,000</span>

D) Deploy: upload **intake.html** to the project root, and **styles-cta.css** into **/assets**.
   Do NOT delete any existing files.

Optional
--------
- If you use Calendly, link the “Schedule a fit call” button in /intake.html to your Calendly URL.
- If you have a Formspree form ID, replace the action in /intake.html (currently a working placeholder).

Result
------
- “Quick intake” is now a real page that accepts submissions.
- Clear CTAs appear in the header and hero.
- Pills no longer look clickable or change cursor on hover.
