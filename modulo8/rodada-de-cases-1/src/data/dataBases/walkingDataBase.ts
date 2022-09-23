import { connect } from "http2";
import { CustomError } from "../../error/customError";
import { Iwalk } from "../../model/Walk";
import { BaseDatabase } from "./BaseDatabase";

export class WalkDatabase extends BaseDatabase {
  private static TABLE_NAME = "dogWalking_walk";
  private static TABLE_PRICE30MIN = "dogWalking_payment30min"
  private static TABLE_PRICE60MIN = "dogWalking_payment60min"

  public createNewWalk = async (walk:Iwalk):Promise <void>=>{
    try {
        await WalkDatabase.connection
      .insert({
        id: walk.id,
        created_at: walk.created_at,
        status:walk.status,
        latitude: walk.latitude,
        longitude:walk.longitude,
        start_walk:walk.start_walk,
        walk_date:walk.walk_date,
        walk_type:walk.walk_type,
        finish_walk:walk.finish_walk,
        quantity_dogs:walk.quantity_dogs,
        final_price:walk.final_price,
        client_id:walk.client_id
      })
      .into(WalkDatabase.TABLE_NAME)    
    }catch (error:any) {
      throw new CustomError(error.statusCode, error.sqlMessage || error.message);
    };;
  };;

  public getAllWalks = async  ():Promise <any> => {
    try {
      const walk = await WalkDatabase.connection(WalkDatabase.TABLE_NAME).select().orderBy("id");
      return walk;
    }catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    };;

  };;

  public startWalk = async (id:string):Promise <any>=>{
    try {
      await WalkDatabase.connection(WalkDatabase.TABLE_NAME).update("status","HAPPENING")
      .where("id",id);  

    }catch (error:any) {
      throw new CustomError(error.statusCode, error.sqlMessage || error.message);
    };;
  };;

  public finishWalk = async (id:string):Promise <any>=>{
    try {
      await WalkDatabase.connection(WalkDatabase.TABLE_NAME).update("status","DONE")
      .where("id",id);   

    } catch (error:any) {
      throw new CustomError(error.statusCode, error.sqlMessage || error.message);
    };;
  };;

  public getPrice30Min = async (id:number):Promise <any>=>{
    try {
      const result = await WalkDatabase.connection(WalkDatabase.TABLE_PRICE30MIN)
      .select("price")
      .where("id",id);
      return result;

    }catch (error:any) {
      throw new CustomError(error.statusCode, error.sqlMessage || error.message);
    };;
  };;

  public getPrice60Min = async (id:number):Promise <any>=>{
    try {
      const result = await WalkDatabase.connection(WalkDatabase.TABLE_PRICE60MIN)
      .select("price")
      .where("id",id);
      return result;

    }catch (error:any) {
      throw new CustomError(error.statusCode, error.sqlMessage || error.message);
    };;
  };;

   public isDateAvaiable = async (startTime:string, endTime:string, date:string):Promise <any>=>{
    try {
      const result = await WalkDatabase.connection(WalkDatabase.TABLE_NAME).select()
      .where("start_walk",startTime )
      .andWhere("finish_walk",endTime)
      .andWhere("walk_date","like",date)
      return result
      
    }catch (error:any) {
      throw new CustomError(error.statusCode, error.sqlMessage || error.message);
    };;
  } 
};;;
