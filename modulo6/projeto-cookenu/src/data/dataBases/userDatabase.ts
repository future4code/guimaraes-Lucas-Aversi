



import { user, User } from "../../model/User";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../../error/customError";
import authenticator from "../../services/authenticator";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "cookenu_users";

  async create(user: user): Promise<void> {
    await UserDatabase.connection
      .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  async getUserAll ():Promise <User[]> {
    const user = await UserDatabase.connection(UserDatabase.TABLE_NAME).select()

    return user
  }

  public findUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
        .select()
        .where({email});
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };


  public getProfileById = async (id: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
        .select("id", "name", "email")
        .where("id", "like", id);

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };

  
}
