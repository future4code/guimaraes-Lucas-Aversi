import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'

export class UserBusiness {
  async create({ email, name, password }: any):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }



  async getUser():Promise<any> {
try{    
  const allUsers = await new UserDatabase().getUser()
    let resultArray =(JSON.stringify(allUsers))
    console.log("array result", resultArray)
    return resultArray} 
    catch(e:any){
      e.message

    } 
  }
}
