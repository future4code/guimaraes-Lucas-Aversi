import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, LoginUserInputDTO, UserInputDTO } from "../model/user";

export class UserController {

      private UserBusiness: UserBusiness
      constructor(){
        this.UserBusiness = new UserBusiness()
      }

      public signup = async (req: Request, res: Response) => {
        try {

          const input :UserInputDTO = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            nickname: req.body.nickname,
            role: req.body.role
          }
        
          const token = await this.UserBusiness.createUser(input)
          
    
          res.status(201).send({ message: "Usuário criado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }

      
        public login = async (req: Request, res: Response) => {
          try{
            let input:LoginUserInputDTO = {
              email: req.body.email,
              password: req.body.password

            }
            const token = await this.UserBusiness.login(input)
          res.status(201).send({ message: "login efetuado!", token });

          }
          catch (error: any) {
            res.status(400).send(error.message);
          }
      }
}
