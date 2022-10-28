import { isExist } from "../firebase/Data/Exists";


export const productValidatorPost = async(id: string, Product: string[]) => {
  console.log(!await isExist(id))
  console.log(validateEmail(id))
  console.log(Product)
  return !await isExist(id) && validateEmail(id) && validateProducts(Product)
}

export const idExists = async(id: string) => {
  return !await isExist(id)
}

function validateEmail(email:string){
  var emailRegex =  /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  return emailRegex.test(email) ? true : false;
}

function validateProducts(Product:string[]) {
  return Product.length > 0 ? true : false
}