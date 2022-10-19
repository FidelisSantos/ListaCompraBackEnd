import { initializeApp } from "firebase/app";
import  {collection, getFirestore} from "firebase/firestore"
import * as dotenv from 'dotenv';

dotenv.config()
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASURENMENTID
};
// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig)

export const firestore = getFirestore(appFirebase);

export const firestoreCollection = collection(firestore,"Items");
