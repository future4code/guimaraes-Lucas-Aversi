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
  
        let user :user={id,email,password:hash,name,role}
  
        if(!name || !email || !password){
          throw new CustomError(422,"Ausencia de parametros")
        }
        if(password.length <6){
            throw new CustomError(400,"a senha precisa conter no minimo 6 caracteres")

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


    public getOwnProfile = async (input: any): Promise<any> => {
		try {

			const tokenData = authenticator.getTokenData(input)
            

			const user = await this.userDB.getProfileById(tokenData.id)
            console.log(user.id)

			if (!user) {
				throw new CustomError(404, "user not found");
			}

			return user

		} catch (error: any) {
			throw new CustomError(400, error.message)
		}
	};


    public getAnotherProfile = async (input: any): Promise<any> => {

		try {
			const {token, id} = input

		const tokenData = authenticator.getTokenData(token)

		const userExists = await this.userDB.getProfileById(tokenData.id)

		if (!userExists) {
			throw new CustomError(404,"user not found");
		}

		const user = await this.userDB.getProfileById(id)

		if (!user) {
			throw new CustomError(404,"user not found");
		}

		return user

		} catch (error:any) {
			throw new CustomError(400, error.message)
		}
    }
    
    public getAllUsers = async  (input:any): Promise<User[]>=> {
        try{
        const tokenData = authenticator.getTokenData(input)
        console.log(tokenData.role)
         if (tokenData.role!=="admin"){
            throw new CustomError(403,"user must be an admin to access this feature")
        } 
        
        const users = await this.userDB.getUserAll(); 

        return users;     
        }
        catch (error:any) {
			throw new CustomError(400, error.message)
		}
           
    }
  }
  