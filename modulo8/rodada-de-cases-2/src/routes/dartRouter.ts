import express from 'express'
import { DartController } from '../controller/dartController'


export const dartRouter = express.Router()


const raceController = new DartController()

dartRouter.post("/dart/register/:id",raceController.newRegister)
dartRouter.get("/dart/getAll", raceController.getAll)