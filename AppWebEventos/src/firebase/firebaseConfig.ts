import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDJYpQ5LKhg29Jt76d1HG8B2M7ApJHSmk4",
  authDomain: "app-auth-web.firebaseapp.com",
  projectId: "app-auth-web",
  storageBucket: "app-auth-web.firebasestorage.app",
  messagingSenderId: "577958723905",
  appId: "1:577958723905:web:f635a54014e0703339a1c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
