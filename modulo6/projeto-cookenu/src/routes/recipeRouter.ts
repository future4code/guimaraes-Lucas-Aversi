import express from 'express'
import { RecipeController } from '../controller/recipesController'

export const recipeRouter = express.Router()

const recipeController = new RecipeController()
recipeRouter.delete("/:authorId", recipeController.deleteRecipe)
recipeRouter.post("/create", recipeController.create)
recipeRouter.get("/all", recipeController.getAll)
recipeRouter.put("/editRecipe/:author_id/:id", recipeController.editRecipe)
recipeRouter.get("/author/:id", recipeController.getRecipeByAuthor)
recipeRouter.get("/:id", recipeController.getRecipeById)
 


