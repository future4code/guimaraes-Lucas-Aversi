import express from 'express'
import { FriendshipController } from '../controller/FriendshipController'
import { Request,Response} from 'express'

export const friendshipRouter = express.Router()

const friendshipController = new FriendshipController()



friendshipRouter.post("/:sender/makeFriend", friendshipController.createFriendship)
friendshipRouter.get("/all", friendshipController.getAll)
friendshipRouter.delete("/deleteFriend", friendshipController.deleteFriendship)