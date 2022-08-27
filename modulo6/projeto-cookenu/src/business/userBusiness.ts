import { userInputDTO, user, User, LoginUserInputDTO } from "../model/User";
import { UserDatabase } from "../data/dataBases/userDatabase";
import  IdGenerator  from "../services/idGenerator";
import hashManager from "../services/hashManager";
import { CustomError } from "../error/customError";
import authenticator from "../services/authenticator";
import { AuthenticationData } from "../model/AuthenticationData";
export class UserBusiness {

    private userDB:UserDatabase
    constructor(){
      this.userDB = new UserDatabase()
    }
    public createUser = async (input: userInputDTO) => {
      try {
        let {name, email, password, role} = input
        const id = IdGenerator.generatedID()
        const hash = await hashManager.generateHash(password)
  
        console.log("eu1", password)
  
        const user :user={id,email,password:hash,name,role}
  
        if(!name || !email || !password){
          throw new CustomError(422,"Ausencia de parametros")
        }
        if (role !== "normal" && role !== "admin"){
          role = "normal"
        }
  
        await this.userDB.create(user)
        const token = authenticator.generateToken({id,role})
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
      const hashCompare = await hashManager.compareHash(password,user.password)
      if(!hashCompare){
        throw new CustomError(403,"Invalid password")
      }
  
      const payload :AuthenticationData={
        id: user.id,
        role: user.role
      }
  
      const token = authenticator.generateToken(payload)
      return token
    }
    
    async getUserBusiness (): Promise<User[]> {

        const userDatabase = new UserDatabase();
        const users = await userDatabase.getUserAll();  
        return users;        
    }
  }
  