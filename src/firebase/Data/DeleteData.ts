import { deleteDoc, doc } from "firebase/firestore"
import { firestore } from "../Connection"


export const deleteData = async(id:string) =>{
  console.log("entrei aqui")
  const producDoc = doc(firestore, "Items", id)
  await deleteDoc(producDoc)
  return true;
}