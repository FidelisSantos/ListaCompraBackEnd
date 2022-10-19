import { firestore, firestoreCollection } from '../Connection';
import { IProduct } from '../../interfaces/IProduct';
import{doc, getDoc, getDocs} from "firebase/firestore"


  export const getAllFirebase = async () => {
      const data = await getDocs(firestoreCollection);
      const response=  data.docs.map((doc) => ({...doc.data(), id: doc.id}));
      console.log(response)
      return response;
  }

  export const getFirebase = async (id: string) =>{
      var response;
      const data = await getAllFirebase()
      data.forEach(function(value) {
        if(value.id === id)
        {
           response =  value
        }
      })
      return response
  }

  