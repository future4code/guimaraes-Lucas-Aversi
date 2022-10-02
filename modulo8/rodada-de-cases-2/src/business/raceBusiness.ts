import { RaceDatabase } from "../data/dataBases/raceDatabase";
import idGenerator from "../services/idGenerator";

export class RaceBusiness{

    private RaceDB:RaceDatabase
    constructor(){
        this.RaceDB = new RaceDatabase()
    }

    public newRegister = async (input:any) =>{
        try {
            let{game_id,value,athlete,unit_measure}=input
            const id = idGenerator.generatedID()
            const register = {id,game_id,athlete,value,unit_measure}
            console.log("businessOBJ",register)
            const result = await this.RaceDB.newRegister(register)
            return result
        } catch (error) {
            
        }
  
    }

    public getAll = async()=>{
        try {
            const result = await this.RaceDB.getAll()
            return result
        } catch (error) {
            
        }
    }
}