import { CompetitionDatabase } from "../data/dataBases/competitionDatabase";
import { Competition, TCompetition } from "../model/competitionModelling";
import idGenerator from "../services/idGenerator";

export class CompetitionBusiness {

    private competitionDB:CompetitionDatabase
    constructor(){
      this.competitionDB = new CompetitionDatabase()
    }
    
    public createNewCompetition = async (input:any)=>{
        let{name}=input
        const id = idGenerator.generatedID()
        const status = "OPEN"
        const competition:TCompetition={
          id,
          name,
          status,
        }
        console.log("business",competition)
        const result = await this.competitionDB.createCompetition(competition)
        return result
    }

  public getAll = async()=>{
    const result = await this.competitionDB.getAll()
    return result
  }
   
};;;
  