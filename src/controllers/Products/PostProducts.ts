import {Request,  Response } from "express";
import { IProduct } from '../../interfaces/IProduct';
import { productServices } from '../../services/ProductServices';

  export const newProduct = async (req:Request<IProduct[]>, res:Response) =>{
    const data = req.body;
    const result = await productServices.Post(data.id, data.Product);
    console.log(result);
    var emailRegex =  /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    console.log(emailRegex.test(data.id)) 
    if(result instanceof Error) 
        return res.status(500).json("Erro ao cadastrar")

    return result? res.status(201).json(data) : res.status(404).json("Dados inválidos para cadastra");
  }
