



import { user, User } from "../../model/User";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../../error/customError";
import authenticator from "../../services/authenticator";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "cookenu_users";

  public create = async (user: user): Promise<void>=> {
    await UserDatabase.connection
      .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role:user.role
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public getUserAll = async  ():Promise <User[]>=> {
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
      throw new CustomError(error.sqlMessage);
    }
  };

  public findUserById = async (id: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
        .select()
        .where({id});
      return result[0];
    } catch (error: any) {
      throw new CustomError(error.sqlMessage);
    }
  };


  public getProfileById = async (id: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
        .select("id", "name", "email")
        .where("id", "like", id);

      return result[0];
    } catch (error: any) {
      throw new CustomError(error.sqlMessage);
    }
  };

  
}
