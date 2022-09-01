import { CustomError } from "../../error/customError";
import { Follow, follow, unfollow, unfollowInputDTO } from "../../model/Follow";
import { BaseDatabase } from "./BaseDatabase";


export class FollowDatabase extends BaseDatabase {
    private static TABLE_NAME = "cookenu_follows";
  
    public follow = async (follow: follow): Promise<void> => {
      try{
        await FollowDatabase.connection(FollowDatabase.TABLE_NAME)
        .insert({
          id: follow.id,
          user_id: follow.user_id,
          following_id: follow.following_id
        })
        }
        catch (error:any) {
          throw new CustomError(error.message)
    }
}

  public unfollow = async(unfollow: unfollow):Promise<void>=>{
    try {
       await FollowDatabase.connection(FollowDatabase.TABLE_NAME)
      .delete()
      .where("following_id", unfollow.following_id)
      .andWhere("user_id", unfollow.user_id)
      
    } catch (error:any) {
        throw new CustomError(error.sqlMessage)
      
    }
  }
  
    public getAllFollows = async ():Promise <Follow[]> =>{
      const follow = await FollowDatabase.connection(FollowDatabase.TABLE_NAME).select()
      return follow
    }
  
    public getFollowsById = async (id: string): Promise<Follow[]> => {
  
      try {  
        const result = await FollowDatabase.connection
        .select("id","following_id")
        .where("user_id","like",id)
        .into(FollowDatabase.TABLE_NAME)
        return result
        
        } catch (error:any) {
        throw new CustomError(error.message)          
        }  
  
  
    }  
  
  }
  