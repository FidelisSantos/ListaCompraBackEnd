import { initializeApp } from "firebase/app";
import  firebase ,{collection, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: ,
  authDomain: ,
  projectId: ,
  storageBucket: ,
  messagingSenderId: ,
  appId: ,
  measurementId: 
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export const firestore = getFirestore(appFirebase);

export const firestoreCollection = collection(firestore,"Items");
