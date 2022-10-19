import { Request, Response } from "express";
import { productServices } from '../../services/ProductServices';

export const updateProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  const Products = req.body.Product
    const result = await productServices.Put(id, Products);
    if(result instanceof Error)
      return res.status(500).json("Erro ao atualizar");
    
    return result ? res.status(200).json({Products, id}) : res.status(404).json("usuário não encontrado");
}