import express from 'express'
import { RaceController } from '../controller/raceController'


export const raceRouter = express.Router()


const raceController = new RaceController()

raceRouter.post("/race/register/:id",raceController.newRegister)
raceRouter.get("/race/getAll", raceController.getAll)
//raceRouter.get("/ShowFinalRank/:id", )
