import { userInputDTO, user, User } from "../model/User";
import { UserDatabase } from "../data/dataBases/userDatabase";
import  IdGenerator  from "../services/idGenerator";
export class UserBusiness {

    private userDB:UserDatabase
    constructor(){
      this.userDB = new UserDatabase()
    }


    async create(input:userInputDTO):Promise<void>{

        const { name, email, password } = input

        const id = IdGenerator.generatedID()

        const userDatabase = new UserDatabase()
        const user: user = {
            id,
            name,
            email,
            password
        }   
        await this.userDB.create(user)
    }

        async getUserBusiness (): Promise<User[]> {

            const userDatabase = new UserDatabase();
            const users = await userDatabase.getUserAll();  
            return users;        
        }
}