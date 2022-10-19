import { deleteDoc, doc } from "firebase/firestore"
import { firestore } from "../Connection"
import { getFirebase } from "./GetData";


export const deleteData = async(id:string) =>{
  const exists = await getFirebase(id);
  if(exists) {
    const producDoc = doc(firestore, "Items", id)
    await deleteDoc(producDoc);
    return true;
  }
  return false;
}