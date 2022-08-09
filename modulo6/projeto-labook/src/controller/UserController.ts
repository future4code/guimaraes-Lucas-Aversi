import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness"
import { userInputDTO } from "../model/User";

export class UserController {

  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const userBusiness = new UserBusiness();
      const user : userInputDTO = {
        email,
        name,
        password
      }
      await userBusiness.create(user);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });

    } catch (error:any) {
      res.status(400).send(error.message);
    }
  }

  async getAll(req: Request, res: Response){
    try {
      const userBusiness = new UserBusiness()
      const users = await userBusiness.getUserBusiness()

      res.status(201).send(users)
      
    } catch (error:any) {
      res.status(400).send(error.message);
    }
  }
}
