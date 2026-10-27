# UMPIRENATION — complete website source package

This folder contains the website source files together. It is designed for browser-only editing through GitHub.

## Files and what they do
- `index.html` — public homepage
- `style.css` — shared design system and responsive styling (Forest Green public pages; Midnight Blue admin workspace)
- `app.js` — homepage interactions
- `login.html`, `register.html`, `auth.js` — Firebase login, registration, password reset and role-based redirects
- `admin.html`, `admin.js` — admin console UI and data views
- `umpire-dashboard.html`, `organizer-dashboard.html` — role portal landing pages
- `firebase-config.js` — public Firebase Web App configuration placeholders
- `firestore.rules`, `storage.rules` — starter rules that must be reviewed and tested
- `firebase.json` — Firebase Hosting configuration
- `privacy.html`, `terms.html` — policy placeholders; replace with reviewed policies before launch
- `scripts/provision-admin.js` — trusted-environment admin custom-claim provisioning script

## Upload the full project to GitHub
1. Download and extract the ZIP on your computer.
2. Open your GitHub repository: https://github.com/shubhampatil00086/umpirenation
3. Open the repository root. If using browser-only upload, select **Add file → Upload files**.
4. Upload the files and folders from inside the extracted `UMPIRENATION_Website` folder, not the ZIP itself. Keep filenames and folder names unchanged.
5. Commit the changes. In GitHub → Settings → Pages, make sure Pages serves the branch and root folder you use.
6. Open the website and press Ctrl+Shift+R.

If GitHub's upload screen cannot replace many files in one go, upload in batches. Keep the `scripts` folder and all HTML/JS/CSS/rules files.

## Firebase setup is required for real accounts
1. Create/select a Firebase project and register a Web App.
2. Copy its web config into `firebase-config.js`. These browser config values are not service-account secrets.
3. Enable Authentication → Email/Password.
4. Create Cloud Firestore.
5. Review and deploy the Firestore and Storage rules in Firebase Console; test them before inviting users.
6. Add the deployed website domain to Firebase Authentication's authorized domains.
7. Register a test organizer and umpire account and confirm email verification and role redirects.
8. Provision the admin custom claim only from a trusted environment. Do not give admin access by changing frontend code or by checking an email address alone.

## Important scope and production warning
This package gives you a coherent UI and Firebase starter, not a fully finished, audited marketplace. Event creation, multi-match scheduling, booking transactions, approval mutations, complete XLSX export, WhatsApp messaging, payments/commission and review eligibility need secure backend workflows (typically Firebase Cloud Functions). Never put service-account JSON, WhatsApp provider tokens or payment secrets in GitHub/browser code. Do not enable payments until the server-side flow is built and tested.
