// Firebase Web App config is public; never put service-account keys or provider secrets here.
export const firebaseConfig = {
  apiKey: "PASTE_YOUR_FIREBASE_WEB_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID",
  appId: "PASTE_YOUR_FIREBASE_APP_ID"
};
export const firebaseReady = !Object.values(firebaseConfig).some(v => v.startsWith("PASTE_") || v.includes("YOUR_PROJECT_ID"));
