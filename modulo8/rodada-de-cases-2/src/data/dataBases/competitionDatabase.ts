

import { competitionInputDTO, Competition, TCompetition } from "../../model/competitionModelling";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError} from "../../error/customError";

export class CompetitionDatabase extends BaseDatabase {
  private static TABLE_NAME = "estanteVirtual_competition";

  public createCompetition = async (competition:TCompetition):Promise<void> =>{
    try {
      await CompetitionDatabase.connection(CompetitionDatabase.TABLE_NAME)
      .insert({
        id: competition.id,
        name:competition.name,
        status:competition.status
      })      
    } catch (error:any) {
      
    }
  }

  public getAll = async ()=>{
    try {
      const result = await CompetitionDatabase.connection(CompetitionDatabase.TABLE_NAME).select()
      return result
    } catch (error:any) {
      
    }
  }


  
};;;
