# Zenlet post-login and admin pages

Upload these HTML files and `workspace.css` to the same GitHub root as the public pages and existing `styles.css` and `app.js`.

## Member pages
- user-dashboard.html
- profile.html
- referrals.html
- promoter.html
- activity.html
- support.html
- settings.html

## Admin pages
- admin-dashboard.html
- admin-users.html
- admin-kyc.html
- admin-deposits.html
- admin-withdrawals.html
- admin-promoters.html
- admin-partners.html
- admin-tickets.html
- admin-reports.html
- admin-settings.html

## Important integration notes
These are separate front-end page layouts, not a completed authentication or admin system. The current login page does not yet authenticate users or redirect them. Before production, connect the pages to the backend and enforce member/admin permissions on the server for every protected API route. Never rely on hiding admin links in HTML as access control.

KYC uploads, deposits, withdrawals, wallet balances and crypto transfers are intentionally not enabled. Do not collect identity documents or accept real money through this static preview. Obtain legal, compliance, privacy and security review before enabling regulated or financial features.
