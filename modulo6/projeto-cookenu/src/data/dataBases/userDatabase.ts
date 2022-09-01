



import { user, User } from "../../model/User";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../../error/customError";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "cookenu_users";

  public create = async (user: user): Promise<void>=> {
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
    } catch (error: any) {
      throw new CustomError(error.sqlMessage);
    }
  }

  public getUserAll = async  ():Promise <User[]>=> {
    const user = await UserDatabase.connection(UserDatabase.TABLE_NAME).select().orderBy("name")
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

  public getFeed = async (user_id:string)=>{
    try {
      const result = await UserDatabase.connection("cookenu_recipes")
      .join("cookenu_users", "cookenu_users.id","cookenu_recipes.author_id")
      .join("cookenu_follows","cookenu_recipes.author_id","cookenu_follows.following_id")
      .select("cookenu_recipes.id","cookenu_recipes.title","cookenu_recipes.description","cookenu_recipes.instructions","cookenu_recipes.created_at","cookenu_recipes.author_id","cookenu_users.name")      
      .where("cookenu_follows.user_id",user_id)
      .orderBy("cookenu_recipes.created_at","desc")
      return result
      
    } catch (error:any) {
      throw new CustomError(error.sqlMessage);
      
    }
  }

  
}
