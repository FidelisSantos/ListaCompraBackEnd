import { idExists, productValidatorPost } from '../Validator/ProductValidator';
import { ProductData } from '../firebase/index';
import { IProduct } from '../interfaces/IProduct';

export const productServices = {
  Post :async(id: string, Product: string[]) => {
    if(await productValidatorPost(id, Product)){
      try {
        await ProductData.create(Product, id);
        return true;
      }catch(error){
        return new Error
      }
    }
    return false;
  },
  Put: async(id: string, Product: string[]) => {
    if(await idExists(id)){
      try {
        await ProductData.update(id, Product);
        return true;
      }catch(error){
        return new Error
      }
    }
    return false;
  },
  Delete: async(id:string) => {
    if(await idExists(id)){
      try{
        console.log(await idExists(id));
        await ProductData.delete(id);
        return true;
      }catch(error){
        return new Error;
      }
    }
    return false;
  },
  List: async() => {
    try{
      const data = await ProductData.list();
      return data;
    }catch(error){
      return new Error;
    }
  },
  Find: async(id: string)  => {
    try {
      const data = await ProductData.find(id)
      return data
    }catch(error){
      return new Error;
    }
  }
}
