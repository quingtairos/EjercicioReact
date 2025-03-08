import { getFirestore } from 'firebase/firestore';
import { collection } from 'firebase/firestore/lite';
import { app } from './firebaseConfig';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAySlFZtVAyPXmIcm_NGmNPq4Jjn9Ppew8",
  authDomain: "gestoreventos-faf1c.firebaseapp.com",
  projectId: "gestoreventos-faf1c",
  storageBucket: "gestoreventos-faf1c.firebasestorage.app",
  messagingSenderId: "1003739842436",
  appId: "1:1003739842436:web:f3cd0c149a1c04e802bfd1",
  measurementId: "G-XGPFYTR6P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const firestore = getFirestore(app);



//EVENTOS COLLECTION
export const EventosCollection = collection(firestore, 'Eventos');