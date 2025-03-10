/*import { getProductos } from './../components/Productos/Productos';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
  apiKey: "AIzaSyAySlFZtVAyPXmIcm_NGmNPq4Jjn9Ppew8",
  authDomain: "gestoreventos-faf1c.firebaseapp.com",
  projectId: "gestoreventos-faf1c",
  storageBucket: "gestoreventos-faf1c.firebasestorage.app",
  messagingSenderId: "1003739842436",
  appId: "1:1003739842436:web:f3cd0c149a1c04e802bfd1",
  measurementId: "G-XGPFYTR6P8"
}; */


// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

/*export { getProductos }; /* const firestore = getFirestore(app);



//EVENTOS COLLECTION
export const EventosCollection = collection(firestore, 'Eventos');*/


import { collection, getFirestore } from 'firebase/firestore';
//import { db } from './firebaseConfig';

// Usamos la instancia ya inicializada
const db = getFirestore();

export const EventosCollection = collection(db, 'eventos');


// Función para obtener productos desde Firestore
/*async function getProductos() {
  const productosCol = collection(db, 'productos');
  const productosSnapshot = await getDocs(productosCol);
  const productosList = productosSnapshot.docs.map(doc => doc.data());
  return productosList;
}



export { getProductos }; */
