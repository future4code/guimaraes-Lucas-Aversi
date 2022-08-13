import { friendshipInputDTO, friendship, Friendship } from "../model/Friendship";
import { FriendshipDatabase } from "../data/dataBases/friendshipDatabase";
import { generateId } from "../services/idGenerator";
import { Request } from "express";

export class FriendshipBusiness{
    public create = async (data:friendshipInputDTO):Promise<void>=>{
        try{
            const { sender, reciever } = data
            console.log("data",data)

            const idRequest: string = generateId()
            const friendshipDatabase = new FriendshipDatabase()
            const friendship:friendship={
                idRequest,
                sender,
                reciever
            }
            await friendshipDatabase.create(friendship)

        } catch (error: any) {
            throw new Error(error.message);
        }
    };


    async getfriendshipBusiness (): Promise<Friendship[]>{

        const friendshipDB = new FriendshipDatabase();
        const friendship = await friendshipDB.getfriendshipAll();
        return friendship
    }

    async  deletedFriendshipBusiness (idRequest:string):Promise<any>{
        const friendshipDB = new FriendshipDatabase();
        const deletedFriendship = await friendshipDB.deletedFriendship(idRequest)
        
        return deletedFriendship
    }
}