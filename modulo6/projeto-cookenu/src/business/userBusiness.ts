import { userInputDTO, user, User, LoginUserInputDTO } from "../model/User";
import { UserDatabase } from "../data/dataBases/userDatabase";
import  IdGenerator  from "../services/idGenerator";
import hashManager from "../services/hashManager";
import { MissingParams_InvalidEmailType, BadRequest_EmptyTable, Forbbiden_Unauthorized, CustomError, InvalidRequest_UserNotFound, InvalidRequest_WrongPassword, MissingParams_InvalidEmail, MissingParams_InvalidName, MissingParams_InvalidPassword, InvalidRequest_WrongName, InvalidRequest_WrongName2, InvalidRequest_NoFeed,} from "../error/customError";
import authenticator from "../services/authenticator";
import { AuthenticationData } from "../model/AuthenticationData";
export class UserBusiness {

    private userDB:UserDatabase
    constructor(){
      this.userDB = new UserDatabase()
    }
    
    public createUser = async (input: userInputDTO) => {
      try {
        let {name, email, password, role} = input;
        const id = IdGenerator.generatedID();
        const hash = await hashManager.generateHash(password);
        let user :user={id,email,password:hash,name,role};
        
        if(role !== "normal" && role !== "admin"){role = "normal"};
        if(name === ""){throw new InvalidRequest_WrongName2()};
        if(email === ""){throw new InvalidRequest_WrongName2()};
        if(password === ""){throw new InvalidRequest_WrongName2()};                
        if(!name){throw new MissingParams_InvalidName()};
        if(!password){throw new MissingParams_InvalidPassword()};
        if(!email.includes("@")){throw new MissingParams_InvalidEmailType()};
        if(!email){throw new MissingParams_InvalidEmail()};

        await this.userDB.create(user);
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


    public getOwnProfile = async (input: any): Promise<any> => {
		try {
			const tokenData = authenticator.getTokenData(input);  
      const user = await this.userDB.getProfileById(tokenData.id);

			if (!user) {throw new InvalidRequest_UserNotFound()};

			return user;
		} catch (error: any) {
			throw new CustomError(error.message)
		};;
	};;


    public getAnotherProfile = async (input: any): Promise<any> => {
		try {
			const {token, id} = input;
      const user = await this.userDB.getProfileById(id);
      const tokenData = authenticator.getTokenData(token);
      const userExists = await this.userDB.getProfileById(tokenData.id);
      let profileExists = await this.userDB.findUserById(input.id);
      
      if (!profileExists) {throw new InvalidRequest_UserNotFound()};
      if (!userExists) {throw new InvalidRequest_UserNotFound()};
      if (!user) {throw new InvalidRequest_UserNotFound()};

      return user;
		} catch (error:any) {
			throw new CustomError(error.message)
		};;
  };;
    
  public getAllUsers = async  (input:any): Promise<User[]>=> {
    try{
      const tokenData = authenticator.getTokenData(input);
      const users = await this.userDB.getUserAll();

      if (tokenData.role !== "admin"){throw new Forbbiden_Unauthorized()};
      if (users.length<0){throw new BadRequest_EmptyTable()};

      return users;     
    }
    catch (error:any) {
      throw new CustomError(error.message)
    };;
  };;

  public getFeed = async(input:any):Promise<any>=>{
    try {
      const {token, id} = input;
      const tokenData = authenticator.getTokenData(token);
      const userExists = await this.userDB.getProfileById(tokenData.id);
      const profileExists = await this.userDB.findUserById(input.id);
      const feed = await this.userDB.getFeed(id);

      if (!profileExists) {throw new InvalidRequest_UserNotFound()};      
      if (!token) {throw new CustomError("sem token")};
      if (!tokenData) {throw new CustomError("sem token")};
		  if (!userExists) {throw new InvalidRequest_UserNotFound()};
      if (feed.length<1) {throw new InvalidRequest_NoFeed()};

      return feed;
    } catch (error:any) {
      throw new CustomError(error.message)
    };
  };;
};;;
  