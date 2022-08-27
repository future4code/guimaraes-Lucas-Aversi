import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness"
import { LoginUserInputDTO, userInputDTO } from "../model/User";

export class UserController {

  private userBusiness: UserBusiness
  constructor(){
    this.userBusiness = new UserBusiness();
  }

  public signup = async (req: Request, res: Response):Promise<void>=>{
    try {
      const { email, name, password } = req.body;
      if(!name){
        throw new Error ("Você não passou o name")
      }
      if(!email){
        throw new Error ("Você não passou o email")
      }
      if(!email.includes("@")){
        throw new Error ("Passe um email válido")
      }
      if(!password){
        throw new Error ("Você não passou a senha")
      }

      const user : userInputDTO = {
        email,
        name,
        password,
      }
      const token = await this.userBusiness.createUser(user)

      res.status(201).send({ message: "Usuário cadastrado com sucesso",token });

    } catch (error:any) {
      res.status(400).send(error.message);
    }
  }

  public login = async (req: Request, res: Response) => {
    try{
      let input:LoginUserInputDTO = {
        email: req.body.email,
        password: req.body.password

      }
      const token = await this.userBusiness.login(input)
    res.status(201).send({ message: "login efetuado!", token });

    }
    catch (error: any) {
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
