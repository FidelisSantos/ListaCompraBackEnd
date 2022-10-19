import { Request, Response } from "express";

export default {
   online (req: Request, res: Response){ 
    return res.json("Online");
  }
}