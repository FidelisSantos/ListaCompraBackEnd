import { setDoc, doc } from 'firebase/firestore';
import { getFirebase } from './GetData';
import { firestoreCollection } from '../Connection';

export const updateData = async (id: string, Products: string[]) => {
    await setDoc(doc(firestoreCollection, id), {
      Produto: Products,
    });
}