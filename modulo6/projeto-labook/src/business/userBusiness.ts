import { userInputDTO, user, User } from "../model/User";
import { UserDatabase } from "../data/dataBases/userDatabase";




export class UserBusiness {
    async create(input:userInputDTO):Promise<void>{
        const { name, email, password } = input

        const id = "generateId1"

        const userDatabase = new UserDatabase()
        const user: user = {
        id,
        name,
        email,
        password
        }
        await userDatabase.create(user)
        }

        async getUserBusiness (): Promise<User[]> {

            const userDatabase = new UserDatabase();
            const users = await userDatabase.getUserAll();
        
        
            return users;
        
          }
}