import { CustomError } from "../../error/customError";
import { recipe, recipeDeleteInputDTO, recipeEditInputDTO, Recipes } from "../../model/Recipes";
import { BaseDatabase } from "./BaseDatabase";

export class RecipesDatabase extends BaseDatabase {
  private static TABLE_NAME = "cookenu_recipes";

  async create(recipe: recipe): Promise<void> {
    await RecipesDatabase.connection
      .insert({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        instructions: recipe.instructions,
        author_id:recipe.author_id
      })
      .into(RecipesDatabase.TABLE_NAME);
  }

  async getAllRecpies ():Promise <Recipes[]> {
    const recipe = await RecipesDatabase.connection(RecipesDatabase.TABLE_NAME).select()
    .orderBy("title")
    return recipe
  }

  public getRecipeById = async (id: string): Promise<any> => {

    try {
        const result = await RecipesDatabase.connection(RecipesDatabase.TABLE_NAME)
            .select()
            .where("id", "like", id)
        return result[0]
    } catch (error:any) {
        throw new CustomError(error.message)
        
    }

}

public getRecipeByUser = async (id:string):Promise<any>=>{
  try {
    const result = await RecipesDatabase.connection(RecipesDatabase.TABLE_NAME)
    .select()
    .where("author_id","like", id)
    .orderBy("title")
    return result
    
  } catch (error:any) {
      throw new CustomError(error.message)           
  }
}

public editRecipe = async (input:recipeEditInputDTO,token:string):Promise<any>=>{
  try {
    const result = await RecipesDatabase.connection(RecipesDatabase.TABLE_NAME)
    .update({
      title: input.title,
      description: input.description,
      instructions: input.instructions,
    })
    .where("id","like",input.id)
    .andWhere("author_id","like", input.author_id)
    return result

    
  } catch (error:any) {
    throw new CustomError(error.message)           
}

}
  public findRecipeById = async (id: string) => {
    try {
      const result = await RecipesDatabase.connection(RecipesDatabase.TABLE_NAME)
        .select()
        .where({id});
      return result[0];
    } catch (error: any) {
      throw new CustomError(error.sqlMessage);
    }
  };

  public verifyUserRecipe = async (id: string,recipe_id:string) => {
    try {
      const result = await RecipesDatabase.connection(RecipesDatabase.TABLE_NAME)
        .select("id")
        .where("author_id","like", id)
        .andWhere("id","like", recipe_id)
      return result[0]
      } catch (error: any) {
      throw new CustomError(error.sqlMessage);
    }
  };

  public deleteRecipe = async(del:recipeDeleteInputDTO,):Promise<void>=>{
    try {
       await RecipesDatabase.connection(RecipesDatabase.TABLE_NAME)
      .delete()
      .where("id", del.id)
      .andWhere("author_id", del.author_id)
      
    } catch (error:any) {
        throw new CustomError(error.sqlMessage)
      
    }
  }


}
