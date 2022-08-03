import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

const userBusiness = new UserBusiness();
export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { email, name, password } = req.body;

      await userBusiness.create({ email, name, password });

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const result = await userBusiness.findAll();

      res.status(201).send({ result });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
