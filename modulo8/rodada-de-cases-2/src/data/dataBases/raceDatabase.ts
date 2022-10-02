import { BaseDatabase } from "./BaseDatabase";

export class RaceDatabase extends BaseDatabase {
    private static TABLE_NAME = "estanteVirtual_athletics_race";

    public newRegister = async(register:any):Promise<void>=>{
        try {
            await RaceDatabase.connection(RaceDatabase.TABLE_NAME)
            .insert({
                id:register.id,
                game_id:register.game_id,
                athlete:register.athlete,
                value:register.value,
                unit_measure:register.unit_measure
            })            
        } catch (error) {
            
        }

    }

    public getAll = async ()=>{
        try {
          const result = await RaceDatabase.connection(RaceDatabase.TABLE_NAME).select().orderBy("value")
          return result
        } catch (error:any) {
          
        }



    }
}