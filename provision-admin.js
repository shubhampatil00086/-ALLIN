// TRUSTED ENVIRONMENT ONLY. Never run in browser or commit service-account credentials.
const {initializeApp,applicationDefault}=require("firebase-admin/app");
const {getAuth}=require("firebase-admin/auth");
async function main(){const email=process.argv[2];if(!email||!email.includes("@"))throw new Error("Usage: node scripts/provision-admin.js owner@example.com");initializeApp({credential:applicationDefault()});const user=await getAuth().getUserByEmail(email);await getAuth().setCustomUserClaims(user.uid,{...(user.customClaims||{}),admin:true});await getAuth().revokeRefreshTokens(user.uid);console.log(`Admin claim set for UID ${user.uid}; sign out and back in to refresh token.`);}
main().catch(e=>{console.error(e.message);process.exit(1);});
