import { postData } from "./Data/PostData";
import { updateData } from "./Data/PutData";
import { getAllFirebase, getFirebase } from './Data/GetData';
import { deleteData } from "./Data/DeleteData";

export const ProductData = {
  update: updateData,
  create: postData,
  list: getAllFirebase,
  find: getFirebase,
  delete: deleteData,
}