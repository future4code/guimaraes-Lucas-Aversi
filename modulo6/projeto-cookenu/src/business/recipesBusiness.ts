import { recipe, recipeDeleteInputDTO, recipeEditInputDTO, recipeInputDTO, Recipes } from "../model/Recipes";
import { RecipesDatabase } from "../data/dataBases/recipesDatabase";
import IdGenerator from "../services/idGenerator";
import { CustomError, Forbbiden_IdConflict, Forbbiden_IdConflict2, InvalidRequest_RecipeNotFound, InvalidRequest_UserNotFound, MissingParams_InvalidAuthor, MissingParams_InvalidDescription, MissingParams_InvalidInstructions, MissingParams_InvalidTitle } from "../error/customError";
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

  public getAllRecipesBusiness=async(token:string):Promise<Recipes[]>=>{
    const recipe = await this.recipeDB.getAllRecpies()
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

    public getRecipeByAuthor = async (input:string):Promise<any>=>{
        const authorId = input
        const getByAuthor = await this.recipeDB.getRecipeByUser(authorId)
        return getByAuthor

    }

    public editRecipe = async (input:recipeEditInputDTO,token:string):Promise<any>=>{
      try {
        const {id,title,description,instructions,author_id } = input
        const tokenData = authenticator.getTokenData(token)
        const recipeExists = await this.recipeDB.findRecipeById(id)
        const verifyUserRecipe = await this.recipeDB.verifyUserRecipe(author_id,id)
        const result = Object.values(JSON.parse(JSON.stringify(recipeExists)))
        const result2 = Object.values(JSON.parse(JSON.stringify(verifyUserRecipe)))


        console.log(id)
        console.log(result2[0])


        if(id!==result2[0]){
          throw new CustomError("ID nao bate")
        }

        if(!recipeExists){
          throw new InvalidRequest_RecipeNotFound()
        }

        if(tokenData.id!==author_id){
          throw new CustomError("zoado")
        }

        if(author_id!==result[5]){
          throw new Forbbiden_IdConflict2()
        }
        if (author_id !==tokenData.id ) {
            throw new Forbbiden_IdConflict();
        }



        const editRecipe = await this.recipeDB.editRecipe(input,token)
        return editRecipe
        
      } catch (error: any) {
        throw new CustomError(error.message)
    }
  }

  public deleteRecipe = async(input:recipeDeleteInputDTO,token:string):Promise<any>=>{
    const {author_id,id}=input
    const tokenData = authenticator.getTokenData(token)


    const del: recipeDeleteInputDTO={
        id,
        author_id
    }
    await this.recipeDB.deleteRecipe(del)
}
}