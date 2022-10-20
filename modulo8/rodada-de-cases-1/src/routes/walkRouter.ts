import express from 'express'
import { WalkController } from '../controller/WalkController'

export const walkRouter = express.Router()

const walkController = new WalkController()

walkRouter.get("/getAll",walkController.getAllWalks)
walkRouter.post("/newWalk/:id",walkController.createWalk)
walkRouter.put("/startWalk/:id", walkController.startWalk)
walkRouter.put("/finishWalk/:id", walkController.finishWalk)