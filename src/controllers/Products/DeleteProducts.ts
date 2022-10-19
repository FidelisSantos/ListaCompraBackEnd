import { Request, Response } from 'express';
import { productServices } from '../../services/ProductServices';

export const deleteProducts =async (req: Request, res: Response) => {
  console.log(req.params.id)
  const id = req.params.id
    const result = await productServices.Delete(id);
    if(result instanceof Error)
      return res.status(500).json("Erro ao deletar")
    
    return result ? res.status(200).json("Deletado") : res.status(404).json(`Cliente com e-mail ${req.params.id} não existe na base`)
}