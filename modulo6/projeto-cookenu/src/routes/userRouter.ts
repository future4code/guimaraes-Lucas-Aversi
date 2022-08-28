import express from 'express'
import { UserController } from '../controller/userController'

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.get("/all", userController.getAllUsers)
userRouter.get("/profile", userController.getOwnProfile)
userRouter.get("/:id", userController.getAnotherProfile)

