# YFII GitHub Pages Production Frontend

This package is a static frontend for GitHub Pages.

- Existing Google Apps Script backend URL is preserved in `js/config.js`.
- `scribe-response.html` forwards the invitation token to the existing Apps Script response endpoint.
- The backend invitation URL should be configured to this GitHub Pages site's public URL using the `SiteURL` setting in `YFII Settings`.
- Do not change the Google Apps Script Web App deployment URL.

For a user/organization site, the repository should be named `<github-username>.github.io`, giving a root URL such as `https://<github-username>.github.io/`.
