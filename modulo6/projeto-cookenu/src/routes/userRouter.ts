import express from 'express'
import { FollowController } from '../controller/followController'
import { UserController } from '../controller/UserController'

export const userRouter = express.Router()

const userController = new UserController()
const followController = new FollowController()

userRouter.get("/feed/:id", userController.getFeed)
userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.get("/all", userController.getAllUsers)
userRouter.get("/profile", userController.getOwnProfile)
userRouter.post("/follow", followController.follow)
userRouter.get("/allfollows", followController.getAllFollows)
userRouter.get("/:id", userController.getAnotherProfile)
userRouter.delete("/unfollow/:id", followController.unfollow)
userRouter.get("/follow/:id", followController.getFollowById)