import { Request,Response } from "express";
import { DartBusiness } from "../business/dartBusiness";

export class DartController{
    private dartBusiness:DartBusiness
    constructor(){
        this.dartBusiness = new DartBusiness()
    }

    public newRegister = async (req:Request,res:Response)=>{
    try {
        const {athlete,first_attempt,second_attempt,third_attempt,unit_measure}= req.body
        const game_id = req.params.id
        const register = {game_id,athlete,first_attempt,second_attempt,third_attempt,unit_measure}
        console.log(register,"controller")
        const result = await this.dartBusiness.newRegister(register)
        res.status(200).send(register)
    } catch (error) {
        
    }
}

    public getAll=async(req:Request,res:Response)=>{
        try {
            const result = await this.dartBusiness.getAll()
            res.status(400).send(result)
        } catch (error) {
            
        }
    }
}