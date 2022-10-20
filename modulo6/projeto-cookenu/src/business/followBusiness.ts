import { Follow, follow, FollowInputDTO, unfollow, unfollowInputDTO } from "../model/Follow";
import { FollowDatabase } from "../data/dataBases/followDatabase";
import idGenerator from "../services/idGenerator";
import { BadRequest_EmptyTable, CustomError, Forbbiden_Unauthorized} from "../error/customError";
import authenticator from "../services/authenticator";
import { UserDatabase } from "../data/dataBases/userDatabase";

export class FollowBusiness{
    private followDB:FollowDatabase
    private userDB:UserDatabase
    constructor(){
        this.followDB = new FollowDatabase(),
        this.userDB = new UserDatabase()
    };;

    public follow = async(input:FollowInputDTO,token:string):Promise<void>=>{
        const {user_id,following_id}=input;
        const id = idGenerator.generatedID();
        const tokenData = authenticator.getTokenData(token);
        const follow: follow={id,user_id,following_id};
        
        if(!user_id){throw new CustomError("azedou")};
        if(!following_id){throw new CustomError("azedou")};

        await this.followDB.follow(follow);
    };;

    public unfollow = async(input:unfollowInputDTO,token:string):Promise<any>=>{
        const {user_id,following_id}=input;
        const tokenData = authenticator.getTokenData(token);
        const unfollow: unfollow={user_id,following_id};

        await this.followDB.unfollow(unfollow);
    };;
    
    public getAllFollows = async(token:string):Promise<any>=>{
        const follow =  await this.followDB.getAllFollows();
        const tokenData = authenticator.getTokenData(token);

        return follow;
    };;
    
    public getFollowById = async (input:any,token:string):Promise<any>=>{
        const id = input;
        const result = await this.followDB.getFollowsById(id);
        const tokenData = authenticator.getTokenData(token);

        return result;
    };;
}