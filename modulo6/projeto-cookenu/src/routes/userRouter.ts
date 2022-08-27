import express from 'express'
import { UserController } from '../controller/userController'

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post("/create", userController.create)
userRouter.get("/all", userController.getAll)

