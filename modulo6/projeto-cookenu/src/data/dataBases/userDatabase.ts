



import { user, User } from "../../model/User";
import { BaseDatabase } from "./BaseDatabase";

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
}
