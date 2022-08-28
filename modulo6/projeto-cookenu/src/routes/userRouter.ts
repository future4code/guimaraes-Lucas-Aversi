import express from 'express'
import { FollowController } from '../controller/followController'
import { UserController } from '../controller/userController'

export const userRouter = express.Router()

const userController = new UserController()
const followController = new FollowController()

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.get("/all", userController.getAllUsers)
userRouter.get("/profile", userController.getOwnProfile)
userRouter.get("/:id", userController.getAnotherProfile)
userRouter.post("/follow", followController.follow)
