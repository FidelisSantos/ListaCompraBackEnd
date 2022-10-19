import {setDoc, doc } from "firebase/firestore"
import { firestoreCollection } from "../Connection";


export const postData = async (Product: string[], id: string) => {
  console.log(id, Product)
    await setDoc(doc(firestoreCollection, id), {
      Produto: Product,
    });
}