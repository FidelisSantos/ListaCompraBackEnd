import { getAll, getById } from './Products/GetProducts';
import { newProduct } from "./Products/PostProducts";
import { deleteProducts } from './Products/DeleteProducts';
import { updateProduct } from './Products/PutProducts';


export const ProductControllers = {
  list : getAll,
  create: newProduct,
  delete: deleteProducts,
  findProduct : getById,
  update : updateProduct
}
