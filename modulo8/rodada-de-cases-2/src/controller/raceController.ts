import { Request, Response } from "express";
import { RaceBusiness } from "../business/raceBusiness";

export class RaceController{
    private raceBusiness: RaceBusiness
    constructor(){
        this.raceBusiness = new RaceBusiness()
    }

    public newRegister = async(req:Request,res:Response)=>{
        try {
            let {athlete,value,unit_measure}=req.body
            let game_id = req.params.id
            const register = {game_id,athlete,value,unit_measure}
            
            console.log("contorler",register)

            const result = await this.raceBusiness.newRegister(register)
            res.status(200).send("Novo Registro") 
        } catch (error:any) {
            res.status(400).send(error.message)
        }

    }

    public getAll = async(req:Request,res:Response)=>{
        try {
            const result = await this.raceBusiness.getAll()
            res.status(200).send(result) 

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    } 

}