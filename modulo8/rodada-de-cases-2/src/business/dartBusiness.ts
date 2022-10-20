import { DartDatabase } from "../data/dataBases/dartDatabase";
import { bestAttempt } from "../services/dartBestAttempt";
import idGenerator from "../services/idGenerator";

export class DartBusiness{

    private dartDB:DartDatabase
    constructor(){
        this.dartDB = new DartDatabase();
    }

    public newRegister = async (input:any)=>{
        try {
            const {game_id,athlete,first_attempt,second_attempt,third_attempt,unit_measure}=input
            let best_attempt = await bestAttempt(first_attempt,second_attempt,third_attempt)
            const id = idGenerator.generatedID()
            const register = {id,game_id,first_attempt,second_attempt,third_attempt,best_attempt,unit_measure,athlete}
            const result = await this.dartDB.newRegister(register)
            console.log(register,"business")
            return register
        } catch (error) {
            
        }
    }

    public getAll = async()=>{
        try {
            const result= await this.dartDB.getAll()
            return result
        } catch (error) {
            
        }
    }
}