import { Request, Response } from "express";
import { getFirebase } from "../../firebase/Data/GetData";
import { productServices } from '../../services/ProductServices';

  export const getAll = async (req: Request,res: Response) =>{
    
      const result = await productServices.List();
      console.log(result)
      if(result instanceof Error)
        return res.status(500).json("Erro na requisição");

      return res.status(200).send(result);
  }

  export const getById = async(req: Request, res: Response) => {
    const id = req.params.id
    
      const data = await productServices.Find(id);
      if(data instanceof Error)
        return res.status(500).json("Erro na requisição");
         
      return data? res.status(200).json(data): res.status(404).json(`Usuário com e-mail ${id} não foi encontrado`);    
  }

