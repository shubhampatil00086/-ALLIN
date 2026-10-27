import {initializeApp} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {getAuth,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import {firebaseConfig,firebaseReady} from "./firebase-config.js";
const y=document.querySelector("#year");if(y)y.textContent=new Date().getFullYear();
const mb=document.querySelector("#menuBtn");if(mb)mb.addEventListener("click",()=>{const n=document.querySelector("#nav");n.classList.toggle("open");mb.textContent=n.classList.contains("open")?"×":"☰";});
if(firebaseReady){const app=initializeApp(firebaseConfig);onAuthStateChanged(getAuth(app),u=>{const s=document.querySelector("#sessionStatus");if(s)s.textContent=u?`Signed in as ${u.email}`:"Not signed in";});}
