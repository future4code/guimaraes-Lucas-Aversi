



import { friendship, Friendship } from "../../model/Friendship";
import { BaseDatabase } from "./BaseDatabase";

export class FriendshipDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_friendships";

  async create(friendship: friendship): Promise<void> {
    await FriendshipDatabase.connection
      .insert({
        idRequest: friendship.idRequest,
        sender: friendship.sender,
        reciever: friendship.reciever
      })
      .into(FriendshipDatabase.TABLE_NAME);
  }

  async getfriendshipAll ():Promise <Friendship[]> {
    const friendship = await FriendshipDatabase.connection(FriendshipDatabase.TABLE_NAME).select()

    return friendship
  }
}
