import { CustomError } from "../../error/customError";
import { Follow, follow } from "../../model/Follow";
import { BaseDatabase } from "./BaseDatabase";


export class FollowDatabase extends BaseDatabase {
    private static TABLE_NAME = "cookenu_follows";
  
    public follow = async (follow: follow): Promise<void> => {
      try{
        await FollowDatabase.connection
        .insert({
          id: follow.id,
          user_id: follow.user_id,
          following_id: follow.following_id
        })
        .into(FollowDatabase.TABLE_NAME);
        }
        catch (error:any) {
            throw new CustomError(error.message)
    }
}
  
    public getAllFollows = async ():Promise <Follow[]> =>{
      const follow = await FollowDatabase.connection(FollowDatabase.TABLE_NAME)
      .select("*")  
      return follow
    }
  
    public getFollowsById = async (id: string): Promise<any> => {
  
      try {
  
          const result = await FollowDatabase.connection(FollowDatabase.TABLE_NAME)
              .select()
              .where("id", "like", id)
  
          return result[0]
  
      } catch (error:any) {
          throw new CustomError(error.message)
          
      }
  
  }
  
  
  }
  