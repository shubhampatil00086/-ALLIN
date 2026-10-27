# UMPIRENATION browser-first website starter

Included: responsive homepage, Firebase email/password login and registration, email verification, password reset, role redirects, admin dashboard guarded by Firebase custom claims, Firestore-backed overview/user search, CSV export compatible with Excel, starter Firestore and Storage rules.

## Important
This is a Firebase-ready starter, **not a complete production marketplace yet**. The frontend will not authenticate until Firebase is configured. The admin screen is not allowed to grant itself admin access. Approval mutations, full event scheduler, booking transactions, WhatsApp, payment workflows, audited full exports and dispute handling need trusted Cloud Functions.

## Setup in browser
1. Open Firebase Console and create/select a project.
2. Project settings → General → register a Web App and copy its config.
3. Edit `firebase-config.js` in GitHub; replace all placeholder values.
4. Firebase Authentication → Sign-in method → enable Email/Password.
5. Authentication → Settings → Authorized domains: add your GitHub Pages domain or use Firebase Hosting.
6. Create Cloud Firestore.
7. Deploy/review `firestore.rules` and `storage.rules` in Firebase Console Rules tabs. Test them before real users.
8. Upload all files to your repository root and commit. In GitHub Pages settings, select the correct branch and root folder.
9. Register a normal organizer/umpire and check Authentication and the `users` Firestore collection.
10. Confirm the verification email. Before production, require verified email for protected actions.

## Admin account
Admin is assigned by trusted Firebase Admin SDK custom claim `admin: true`. The script `scripts/provision-admin.js` is for a trusted environment only and requires `firebase-admin` plus Application Default Credentials. Do not put service-account JSON in GitHub or browser files. Google Cloud Shell is a browser-based option; if unsure, ask a developer to provision the account. Sign out/in after provisioning. To revoke, remove the claim and revoke refresh tokens.

## Collections used by the dashboard
`users`, `umpireProfiles`, `events`, `bookings`, `reviews`. Empty or missing records should not be replaced by fake metrics. The browser dashboard currently caps each collection at 500 records; complete filtered exports should be implemented in a Cloud Function with authorization, formula-injection protection, sensitive-field exclusion and audit logging.

## Production security checklist
- Review and test rules against the final data schema. Rules are examples, not a substitute for security testing.
- The starter umpire profile rule needs refinement before profile creation/update is used in production.
- Require verified email; add App Check where appropriate.
- Use Cloud Functions transactions for event publishing, booking conflicts, approvals, reviews, WhatsApp, payments and audit logs.
- Store provider secrets server-side only. Never expose credentials in frontend files.
- Verification documents must remain private.
- Replace privacy/terms placeholders with reviewed policies.
- GitHub Pages is static hosting; it cannot run Firebase Admin SDK or server-side functions.
- Firebase web config is public by design; actual protection comes from Authentication, Rules, App Check and trusted backend authorization.
