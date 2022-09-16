import { UserBusiness } from "../business/userBusiness";
import { Request, Response } from "express";
import { LoginUserInputDTO, userInputDTO } from "../model/User";

export class UserController {
    private userBusiness: UserBusiness
  constructor(){
    this.userBusiness = new UserBusiness();
  };;

  public signup = async (req: Request, res: Response):Promise<void>=>{
    try {
      let { email, name, password, role } = req.body; 
      
      const user : userInputDTO = {email,name,password,role};      
      const token = await this.userBusiness.createUser(user);

      res.status(201).send({ message: "Usuário cadastrado com sucesso",token});
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };;

  public login = async (req: Request, res: Response) => {
    try{
      let input:LoginUserInputDTO = {email: req.body.email,password: req.body.password}
      const token = await this.userBusiness.login(input);

      res.status(201).send({ message: "login efetuado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
};;

    public getAllUsers= async (req: Request, res: Response)=>{
        try {
            const token = req.headers.authorization as string;
            const users = await this.userBusiness.getAllUsers(token);

            res.status(201).send(users);
        } catch (error:any) {
      res.status(400).send(error.message);
    }
};;

};;;
