import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";
  static getUser: any;

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  getUser = async (): Promise<void> => {
    try {
      return await UserDatabase.connection("LABEFLIX_USER");
    } catch (error: any) {
      throw new Error(error.message||error.sqlMessage);
    }
  };
}



