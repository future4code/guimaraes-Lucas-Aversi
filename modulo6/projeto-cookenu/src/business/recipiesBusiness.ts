import { recipe, recipeInputDTO, Recipes } from "../model/Recipies";
import { RecipesDatabase } from "../data/dataBases/recipesDatabase";
import IdGenerator from "../services/idGenerator";
import { CustomError } from "../error/customError";
import authenticator from "../services/authenticator";
import { UserDatabase } from "../data/dataBases/userDatabase";
export class RecipesBusiness{
  private recipeDB:RecipesDatabase
  private userDB: UserDatabase
  constructor(){
    this.recipeDB = new RecipesDatabase(),
    this.userDB = new UserDatabase()
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

    await this.recipeDB.create(recipe)
  }

  public getAllRecipesBusiness=async():Promise<Recipes[]>=>{
    const recipe = await this.recipeDB.getAllRecpies()
    return recipe
  }

  public getRecipeById = async (input: any): Promise<any> => {

    try {

        const { id, token } = input

        if (!token) {
            throw new CustomError(404, "Token Inválido")
        }

        const tokenData = authenticator.getTokenData(token)
        const userExist = await this.userDB.getProfileById(tokenData.id)

        if (!userExist) {
            throw new CustomError(404,"not found current ID")
        }

        const recipe = await this.recipeDB.getRecipeById(id)

        if (!recipe) {
            throw new CustomError(400, "Não foi encontrada uma receita com o id informado.")
        }

        if (!tokenData) {
            throw new CustomError(403, "Não autorizado")
        }

        return recipe

    } catch (error: any) {
        throw new CustomError(400, error.message)
    }
}
}