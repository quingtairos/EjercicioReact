import { getFirestore } from 'firebase/firestore';
import { collection } from 'firebase/firestore/lite';
import { app } from './firebaseConfig';

export const firestore = getFirestore(app);



//EVENTOS COLLECTION
export const EventosCollection = collection(firestore, 'Eventos');