import { stringify } from "querystring";
import { UserDatabase } from "../data/dataBases/userDatabase";
import { WalkDatabase } from "../data/dataBases/walkingDataBase";
import { CustomError, InvalidRequest_InvalidTime, InvalidRequest_TimeNotAvaiable, InvalidRequest_WrongTime } from "../error/customError";
import { Iwalk, IwalkInputDTO } from "../model/Walk";
import { creationMoment } from "../services/dateGenerator";
import idGenerator from "../services/idGenerator";
import { validateDate } from "../services/validateDate";

export class WalkBusiness{

    private walkDB:WalkDatabase
        constructor(){
            this.walkDB =  new WalkDatabase();
        };;
    


        public getAllWalks = async () =>{
            try {
                const result = await this.walkDB.getAllWalks();
                return result;
            } catch (error:any) {
                throw new CustomError(error.statusCode, error.sqlMessage || error.message);
                
            };
        };;

    public startWalk = async (id:string)=>{
        try {
            const result = await this.walkDB.startWalk(id);
            return result;   

        } catch (error:any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message);
        };;
    };;

    public finishWalk = async (id:string)=>{
        try {
            const result = await this.walkDB.finishWalk(id);
            return result;         
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message);
        };;
    };;

    public createWalk = async (input:IwalkInputDTO) =>{
        try {
            const {latitude, longitude,walk_type,walk_date,start_walk,finish_walk,
                  quantity_dogs,client_id} = input;
            const id = idGenerator.generatedID();
            const created_at = creationMoment();
            const status = "TO DO";
            let final_price= "";

            
            const validateTime = validateDate(start_walk,finish_walk);
                
            const isTimePossible = await this.walkDB.isDateAvaiable(start_walk,finish_walk,walk_date)
            const checkDuplicity = Object.values(JSON.parse(JSON.stringify(isTimePossible)));

            if(await validateTime === "error"){throw new InvalidRequest_InvalidTime()};
            if(checkDuplicity.length > 0){throw new InvalidRequest_TimeNotAvaiable}   
            if(walk_type !== validateTime){throw new InvalidRequest_WrongTime}
            else if(walk_type && validateTime ==="60 min"){
                const getPrice = await this.walkDB.getPrice60Min(quantity_dogs);
                final_price = Object.values(JSON.parse(JSON.stringify(getPrice[0]))).toString();
            
            }else if(walk_type && validateTime ==="30 min"){
                const getPrice = await this.walkDB.getPrice30Min(quantity_dogs);
                final_price = Object.values(JSON.parse(JSON.stringify(getPrice[0]))).toString();

            };;


            const walk:Iwalk = {id,created_at,status, latitude,longitude,walk_type,
            walk_date,start_walk,finish_walk,quantity_dogs,final_price,client_id};
            
            const result = await this.walkDB.createNewWalk(walk);

        } catch (error:any) {
        throw new CustomError(error.statusCode, error.sqlMessage || error.message);
        };;
    };;
};;;