import { Console } from "console";
import { UserDatabase } from "../data/dataBases/userDatabase";
import { BadRequest_EmptyTable, CustomError, Forbbiden_Unauthorized, InvalidRequest_UserNotFound, InvalidRequest_WrongName2, InvalidRequest_WrongPassword, MissingParams_InvalidEmail, MissingParams_InvalidEmailType, MissingParams_InvalidName, MissingParams_InvalidPassword } from "../error/customError";
import { AuthenticationData } from "../model/AuthenticationData";
import { LoginUserInputDTO, user, userInputDTO } from "../model/User";
import authenticator from "../services/authenticator";
import hashManager from "../services/hashManager";
import idGenerator from "../services/idGenerator";
export class UserBusiness {

    private userDB:UserDatabase
    constructor(){
      this.userDB = new UserDatabase()
    }
    
    public createUser = async (input: userInputDTO) => {
      try {
        let {name, email, password, role} = input;
        const id = idGenerator.generatedID();
        const hash = await hashManager.generateHash(password);


        if(role?.toLocaleUpperCase() !== "NORMAL" && role?.toLocaleUpperCase() !== "ADMIN"){role = "NORMAL"};
        if(role === "admin"){role="ADMIN"}
        if(name === ""){throw new InvalidRequest_WrongName2()};
        if(email === ""){throw new InvalidRequest_WrongName2()};
        if(password === ""){throw new InvalidRequest_WrongName2()};                
        if(!name){throw new MissingParams_InvalidName()};
        if(!password){throw new MissingParams_InvalidPassword()};
        if(!email.includes("@")){throw new MissingParams_InvalidEmailType()};
        if(!email){throw new MissingParams_InvalidEmail()};

        let result :user={id,email,password:hash,name,role};

        await this.userDB.signup(result);
        const token = authenticator.generateToken({id,role});

        return token; 
      }catch (error:any) {
        throw new CustomError(error.message);
      };;    
    };;
  
    public login = async (input:LoginUserInputDTO) =>{
      try {
        let {email, password} = input;
        const user = await this.userDB.findUserByEmail(email);
        const hashCompare = await hashManager.compareHash(password,user.password);        
        const payload :AuthenticationData={id: user.id,role: user.role};    
        const token = authenticator.generateToken(payload);

        if(!email) {throw new MissingParams_InvalidEmail()};
        if(!password) {throw new MissingParams_InvalidPassword()};    
        if(!user) {throw new InvalidRequest_UserNotFound()};
        if(!hashCompare){throw new InvalidRequest_WrongPassword()};    

        return token;
      }catch (error:any) {
        throw new CustomError(error.message)
      };;      
    };;

    public getAllUsers =  async (token:string)  =>{
        try {
            const tokenData = authenticator.getTokenData(token);
            const result = await this.userDB.getUserAll();           

            if (tokenData.role !== "ADMIN"){throw new Forbbiden_Unauthorized()};
            if (result.length<0){throw new BadRequest_EmptyTable()};

        return result;     
        }
        catch (error:any) {
        throw new CustomError(error.message)
    };;
  };;

};;;
  