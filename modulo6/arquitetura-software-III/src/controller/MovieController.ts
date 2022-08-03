import { Request, Response } from "express";
import { createStrictEquality } from "typescript";
import { MovieBusiness } from "../business/MovieBusiness";
import { movieDTO } from "../models/dataTransferObject";



export class MovieController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const {title, description, duration_in_minutes, year_of_release } = req.body;
      const objectModel:movieDTO = {
        title, description, duration_in_minutes, year_of_release

      } 

      const movieBusiness = new MovieBusiness()
      await movieBusiness.create(objectModel);
      console.log("aquii",objectModel)

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

 
}
