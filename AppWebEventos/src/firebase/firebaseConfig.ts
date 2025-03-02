// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { collection, Firestore, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
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

const db/* : Firestore */ = getFirestore(app);

/* export */ const auth = getAuth(app);

async function getProductos(db: Firestore) {
  const productosCol = collection(db, 'productos');
  const productosSnapshot = await getDocs(productosCol);
  const productosList = productosSnapshot.docs.map(doc => doc.data());
  return productosList;
}

export { app, auth, collection, db, getDocs };

