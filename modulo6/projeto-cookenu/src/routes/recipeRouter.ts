import express from 'express'
import { RecipeController } from '../controller/recipesController'

export const recipeRouter = express.Router()

const recipeController = new RecipeController()

recipeRouter.post("/create", recipeController.create)
recipeRouter.get("/all", recipeController.getAll)

