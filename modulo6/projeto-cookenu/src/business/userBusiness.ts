import { userInputDTO, user, User, LoginUserInputDTO } from "../model/User";
import { UserDatabase } from "../data/dataBases/userDatabase";
import  IdGenerator  from "../services/idGenerator";
import hashManager from "../services/hashManager";
import { BadRequest_EmptyTable, Forbbiden_Unauthorized, CustomError, InvalidRequest_UserNotFound, InvalidRequest_WrongPassword, MissingParams_InvalidEmail, MissingParams_InvalidName, MissingParams_InvalidPassword } from "../error/customError";
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

        let user :user={id,email,password:hash,name,role}
        
        if (role !== "normal" && role !== "admin"){
          role = "normal"
        }
        
        if(!name){
          throw new MissingParams_InvalidName()
        }

        if(!password){
          throw new MissingParams_InvalidPassword()
        }

        if(!email){
          throw new MissingParams_InvalidEmail()
        }

        if(!email.includes("@")){
          throw new MissingParams_InvalidEmail()
        }
  
        await this.userDB.create(user)
        const token = authenticator.generateToken({id,role})
        return token      
      }catch (error: any) {
        throw new CustomError(error.message);
      }
    };
  
    public login = async (input:LoginUserInputDTO) =>{
      let {email, password} = input

      if(!email){
        throw new MissingParams_InvalidEmail()
      }
      if(!password){
        throw new MissingParams_InvalidPassword()
      }
  
      const user = await this.userDB.findUserByEmail(email)
      const hashCompare = await hashManager.compareHash(password,user.password)

      if(!hashCompare){
        throw new InvalidRequest_WrongPassword()
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

			if (!user) {
				throw new InvalidRequest_UserNotFound();
			}

			return user

		} catch (error: any) {
			throw new CustomError(error.message)
		}
	};


    public getAnotherProfile = async (input: any): Promise<any> => {

		try {
			const {token, id} = input

      let profileExists = await this.userDB.findUserById(input.id)
      if (!profileExists) {
				throw new InvalidRequest_UserNotFound();
      }


		    const tokenData = authenticator.getTokenData(token)

		    const userExists = await this.userDB.getProfileById(tokenData.id)

		  if (!userExists) {
				throw new InvalidRequest_UserNotFound();
		} 

		const user = await this.userDB.getProfileById(id)

		if (!user) {
      throw new InvalidRequest_UserNotFound();
		}

		return user

		} catch (error:any) {
			throw new CustomError(error.message)
		}
    }
    
    public getAllUsers = async  (input:any): Promise<User[]>=> {
        try{
        const tokenData = authenticator.getTokenData(input)
        console.log(tokenData.role)

        if (tokenData.role !== "admin"){
          throw new Forbbiden_Unauthorized()
        }

        const users = await this.userDB.getUserAll();
        if(users.length<0){
          throw new BadRequest_EmptyTable();
        } 

        return users;     
        }
        catch (error:any) {
			throw new CustomError(error.message)
		}
           
    }
  }
  