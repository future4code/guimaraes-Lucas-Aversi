import { UserDatabase } from "../data/UserDatabase";
import { CustomError} from "../error/customError";
import {UserInputDTO,user,EditUserInputDTO,EditUserInput,LoginUserInputDTO} from "../model/user";
import IdGenerator from "../services/IdGenerator"
import HashManager from "../services/HashManager"
import Authenticator from "../services/Authenticator"
import { AuthenticationData } from "../model/authenticationData";

export class UserBusiness {

  private userDB:UserDatabase
  constructor(){
    this.userDB = new UserDatabase()
  }
  public createUser = async (input: UserInputDTO) => {
    try {
      let {name, nickname, email, password, role} = input
      const id = IdGenerator.generatedID()
      const hash = await HashManager.generatedHash(password)

      console.log("eu1", password)

      const user :user={id,email,password:hash,name,nickname,role}

      if(!name || !nickname || !email || !password || !role){
        throw new CustomError(422,"Ausencia de parametros")
      }
      if (role !== "normal" && role !== "admin"){
        role = "normal"
      }

      await this.userDB.insertUser(user)
      const token = Authenticator.generateToken({id,role})
      return token      
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input:LoginUserInputDTO) =>{
    let {email, password} = input
    console.log("euu",password)
    if(!email ||!password){
      throw new CustomError(422,"Ausencia de parametros")
    }

    const user = await this.userDB.findUserByEmail(email)
    const hashCompare = await HashManager.compareHash(password,user.password)
    if(!hashCompare){
      throw new CustomError(403,"Invalid password")
    }

    const payload :AuthenticationData={
      id: user.id,
      role: user.role
    }

    const token = Authenticator.generateToken(payload)
    return token
  }  
}
