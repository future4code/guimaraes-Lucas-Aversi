import { UserDatabase } from "../data/UserDatabase";
import { v4 as generateId } from "uuid";
import { User } from "../types/User";

const userDatabase = new UserDatabase();
export class UserBusiness {
  async create({ email, name, password }: any): Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)");
    }

    const id = generateId();

    
    await userDatabase.create({
      id,
      name,
      email,
      password,
    });
  }

  async findAll(): Promise<User[]> {
    const result = await userDatabase.findAll();
    return result;
  }
}
