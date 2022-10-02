import express from 'express'
import { CompetitionController } from '../controller/competitionController'


export const competitionRouter = express.Router()


const competitionController = new CompetitionController()

competitionRouter.post("/create",competitionController.createNewCompetition)
competitionRouter.get("/getAll", competitionController.getAll)
competitionRouter.get("/ShowFinalRank/:id", )
