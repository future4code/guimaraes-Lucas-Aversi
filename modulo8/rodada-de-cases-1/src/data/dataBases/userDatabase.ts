

import { user, User } from "../../model/User";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError} from "../../error/customError";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "dogWalking_users";

  public signup = async (user: user): Promise<void>=> {
    try {
      await UserDatabase.connection
      .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role:user.role
      })
      .into(UserDatabase.TABLE_NAME);      
    }catch (error:any) {
      throw new CustomError(error.statusCode, error.sqlMessage || error.message);
    };;
  };;

  public getUserAll = async  ():Promise <User[]>=> {
    const user = await UserDatabase.connection(UserDatabase.TABLE_NAME).select().orderBy("name");
    return user;
  };;

  public findUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
      .select()
      .where({email});

      return result[0];
    }catch (error: any) {
      throw new CustomError(error.statusCode, error.sqlMessage || error.message);
    };;
  };;

  public findUserById = async (id: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
      .select()
      .where({id});

      return result[0];
    }catch (error: any) {
      throw new CustomError(error.statusCode, error.sqlMessage || error.message);
    };;
  };;
};;;
