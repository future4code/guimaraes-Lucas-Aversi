import { Request, Response } from "express";
import { FollowBusiness } from "../business/followBusiness";
import { CustomError, MissingParams_InvalidName } from "../error/customError";
import { FollowInputDTO } from "../model/Follow";
import authenticator from "../services/authenticator";

export class FollowController{
    private followBusiness: FollowBusiness
    constructor(){
        this.followBusiness = new FollowBusiness()
    }

    public follow = async(req:Request, res:Response):Promise<void>=>{
        try{
            let {user_id,following_id} = req.body
            const token = req.headers.authorization as string


            let follow:FollowInputDTO={
                user_id,
                following_id
            }

            const follows = await this.followBusiness.follow(follow,token)
            res.status(201).send({ message: "followed Sucessfully"});
        }
        catch (error:any) {
            res.status(400).send(error.message);
        }
    }
    }
