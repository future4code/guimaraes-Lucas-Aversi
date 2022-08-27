import { recipe, recipeInputDTO, Recipes } from "../model/Recipies";
import { RecipesDatabase } from "../data/dataBases/recipesDatabase";
import IdGenerator from "../services/idGenerator";
export class RecipesBusiness{
  private recipieDB:RecipesDatabase
  constructor(){
    this.recipieDB = new RecipesDatabase()
  }

  public createRecipe = async (input:recipeInputDTO):Promise<void>=>{
    const {title, description, instructions,author_id}=input
    const id = IdGenerator.generatedID()

    const recipe: recipe ={
      id,
      title,
      description,
      instructions,
      author_id      
    }

    await this.recipieDB.create(recipe)
  }

  public getAllRecipesBusiness=async():Promise<Recipes[]>=>{
    const recipe = await this.recipieDB.getAllRecpies()
    return recipe
  }
}