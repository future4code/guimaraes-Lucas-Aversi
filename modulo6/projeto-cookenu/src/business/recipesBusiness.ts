import { recipe, recipeInputDTO, Recipes } from "../model/Recipes";
import { RecipesDatabase } from "../data/dataBases/recipesDatabase";
import IdGenerator from "../services/idGenerator";
import { CustomError, InvalidRequest_RecipeNotFound, InvalidRequest_UserNotFound, MissingParams_InvalidAuthor, MissingParams_InvalidDescription, MissingParams_InvalidInstructions, MissingParams_InvalidTitle } from "../error/customError";
import authenticator from "../services/authenticator";
import { UserDatabase } from "../data/dataBases/userDatabase";
export class RecipesBusiness{
  private recipeDB:RecipesDatabase
  private userDB: UserDatabase
  constructor(){
    this.recipeDB = new RecipesDatabase(),
    this.userDB = new UserDatabase()
  }

  public createRecipe = async (input:recipeInputDTO, token:string):Promise<void>=>{
    const {title, description, instructions,author_id}=input

    if(!title){
      throw new MissingParams_InvalidTitle()
    }

    if(!description){
      throw new MissingParams_InvalidDescription()
    }

    if(!instructions){
      throw new MissingParams_InvalidInstructions()
    }

    if(!author_id){
      throw new MissingParams_InvalidAuthor()
    }

    const id = IdGenerator.generatedID()
    const tokenData = authenticator.getTokenData(token)

    const recipe: recipe ={
      id,
      title,
      description,
      instructions,
      author_id      
    }

    await this.recipeDB.create(recipe)
  }

  public getAllRecipesBusiness=async(input:any):Promise<Recipes[]>=>{
    const recipe = await this.recipeDB.getAllRecpies()
    const token = input
    const tokenData = authenticator.getTokenData(token)


    return recipe
  }

  public getRecipeById = async (input: any): Promise<any> => {

    try {

        const { id, token } = input

        const tokenData = authenticator.getTokenData(token)
        const userExist = await this.userDB.getProfileById(tokenData.id)

        if (!userExist) {
            throw new InvalidRequest_UserNotFound();
        }

        const recipe = await this.recipeDB.getRecipeById(id)

        if (!recipe) {
            throw new InvalidRequest_RecipeNotFound();
        }

        return recipe

    } catch (error: any) {
        throw new CustomError(error.message)
    }
}
}