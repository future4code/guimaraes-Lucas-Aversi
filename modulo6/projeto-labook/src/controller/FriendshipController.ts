import { Request, Response } from "express";
import { FriendshipBusiness } from "../business/friendshipBusiness"
import { friendshipInputDTO } from "../model/Friendship";

export class FriendshipController {
    public createFriendship = async (req: Request, res: Response) => {
        try {
            const {sender} = req.params
            const {reciever} = req.body
            const friendshipBusiness = new FriendshipBusiness();
            const input: friendshipInputDTO = {
                sender,
                reciever
            };
            console.log("sender",sender)
            console.log(reciever)

            await friendshipBusiness.create(input)

            res.status(201).send("Amigos para sempre!")
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };


  async getAll(req: Request, res: Response){
    try {
      const friendshipBusiness = new FriendshipBusiness()
      const friendship = await friendshipBusiness.getfriendshipBusiness()

      res.status(201).send(friendship)
      
    } catch (error:any) {
      res.status(400).send(error.message);
    }
  }
}
