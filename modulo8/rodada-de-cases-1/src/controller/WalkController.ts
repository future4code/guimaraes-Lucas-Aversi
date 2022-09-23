import { WalkBusiness } from "../business/walkBusiness";
import { Request,Response } from "express";
import { IwalkInputDTO } from "../model/Walk";
import { CustomError } from "../error/customError";

export class WalkController{
    private walkBusiness:WalkBusiness
        constructor(){
            this.walkBusiness =  new WalkBusiness();
        };;

    
    public getAllWalks = async (req:Request, res:Response)=>{
        try {
            const result = await this.walkBusiness.getAllWalks();
        
            res.status(200).send(result);
            
        }catch (error:any) {
            if(error instanceof CustomError){res.status(error.statusCode).send(error.message);
            }else{res.status(400).send(error.message)};;
        };;            
    };;

    public startWalk = async (req:Request, res:Response):Promise <void>=>{
        try {
            const id = req.params.id;
            const result = await this.walkBusiness.startWalk(id);

            res.status(200).send({message:`The walk has been started`});
        }catch (error:any) {
            if(error instanceof CustomError){res.status(error.statusCode).send(error.message);
            }else{res.status(400).send(error.message)};;
        };;
    };;

    public finishWalk = async (req:Request, res:Response):Promise <void>=>{
        try {
            const id = req.params.id;

            const result = await this.walkBusiness.finishWalk(id);

            res.status(200).send({message:`The walk has been finished`});

        }catch (error:any) {
            if(error instanceof CustomError){res.status(error.statusCode).send(error.message);
            }else{res.status(400).send(error.message)};;
        };;
    };;

    public createWalk = async (req:Request, res:Response):Promise <void> =>{
        try {
            const {latitude, longitude,walk_type,walk_date,
            start_walk,finish_walk,quantity_dogs} = req.body;
            const client_id = req.params.id;
                        
            const walk:IwalkInputDTO = {latitude,longitude,walk_type,walk_date,start_walk,
            finish_walk,quantity_dogs,client_id};

            const result = await this.walkBusiness.createWalk(walk);
            res.status(200).send({message:"A new walk has been created"});

        }catch (error:any) {
            if(error instanceof CustomError){res.status(error.statusCode).send(error.message);
            }else{res.status(400).send(error.message)};;
        };;
    };;
};;;