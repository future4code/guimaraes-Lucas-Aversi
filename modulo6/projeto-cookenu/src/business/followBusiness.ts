import { Follow, follow, FollowInputDTO } from "../model/Follow";
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
    }

    public follow = async(input:FollowInputDTO,token:string):Promise<void>=>{
        const {user_id,following_id}=input
        if(!user_id){
            throw new CustomError("azedou")
        }
        if(!following_id){
            throw new CustomError("azedou")
        }

        const id = idGenerator.generatedID()
        const tokenData = authenticator.getTokenData(token)

        const follow: follow={
            id,
            user_id,
            following_id
        }
        await this.followDB.follow(follow)
    }
    
    
}