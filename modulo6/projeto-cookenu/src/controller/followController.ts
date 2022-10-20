import { Request, Response } from "express";
import { FollowBusiness } from "../business/followBusiness";
import { UserBusiness } from "../business/userBusiness";
import { UserDatabase } from "../data/dataBases/userDatabase";
import { CustomError, CustomError2 } from "../error/customError";
import { FollowInputDTO, unfollowInputDTO } from "../model/Follow";
import authenticator from "../services/authenticator";

export class FollowController{
    private followBusiness: FollowBusiness
    private userDatabase:UserDatabase
    constructor(){
        this.followBusiness = new FollowBusiness()
        this.userDatabase = new UserDatabase()
    };;

    public follow = async(req:Request, res:Response):Promise<void>=>{
        try{
            let {user_id,following_id} = req.body;            
            const token = req.headers.authorization as string;
            const userCheck = await this.userDatabase.findUserById(user_id);
            const followingCheck = await this.userDatabase.findUserById(following_id);
            let follow:FollowInputDTO={user_id,following_id};
            const follows = await this.followBusiness.follow(follow,token);

            if(!userCheck){res.status(404).send("User does not exist in database")};
            if(!followingCheck){res.status(404).send("Its kinda weird but this user does not exist")};

            res.status(201).send({ message: "followed Sucessfully"});
        }catch (error:any) {
            res.status(400).send(error.message);
        };
    };;

    public unfollow = async (req:Request, res:Response):Promise<void>=>{
        try {
            let {following_id} = req.body;
            let user_id = req.params.id as string;
            const token = req.headers.authorization as string;
            const userCheck = await this.userDatabase.findUserById(user_id);
            const followingCheck = await this.userDatabase.findUserById(following_id);
            const input: unfollowInputDTO={user_id,following_id};            
            const unfollow = await this.followBusiness.unfollow(input,token);
            
            if(!userCheck){res.status(404).send("User does not exist in database")};
            if(!followingCheck){res.status(404).send("Its kinda weird but this user does not exist")};

            res.status(201).send({ message: "unfollowed Sucessfully"});            
        } catch (error:any) {
            res.status(400).send(error.message);            
        };
    };;

    public getAllFollows = async(req:Request, res:Response):Promise<any>=>{
        try{
            const token = req.headers.authorization as string;
            const allFollows = await this.followBusiness.getAllFollows(token);

            res.status(201).send(allFollows);
        }
        catch (error:any) {
            res.status(400).send(error.message);
        };
    };;


    public getFollowById = async(req:Request, res:Response):Promise<any>=>{
        try{
          const id = req.params.id;
          const token = req.headers.authorization as string;            
          const result = await this.followBusiness.getFollowById(id,token);

          res.status(201).send(result);
        } catch (error:any) {
            res.status(400).send(error.message);
        };
    };;
};;
