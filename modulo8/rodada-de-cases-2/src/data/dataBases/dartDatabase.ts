import { BaseDatabase } from "./BaseDatabase";

export class DartDatabase extends BaseDatabase {
    private static TABLE_NAME = "estanteVirtual_darts";

    public newRegister = async(register:any):Promise<void>=>{
        try {
            await DartDatabase.connection(DartDatabase.TABLE_NAME)
            .insert({
                id:register.id,
                game_id:register.game_id,
                athlete:register.athlete,
                first_attempt:register.first_attempt,
                second_attempt:register.second_attempt,
                third_attempt:register.third_attempt,
                best_attempt:register.best_attempt,
                unit_measure:register.unit_measure
            })            
        } catch (error) {
            
        }

    }

    public getAll = async ()=>{
        try {
          const result = await DartDatabase.connection(DartDatabase.TABLE_NAME).select().orderBy("best_attempt")
          return result
        } catch (error:any) {
          
        }



    }
}