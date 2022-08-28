import { CustomError } from "../../error/customError";
import { recipe, Recipes } from "../../model/Recipes";
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
    return recipe
  }

  public getRecipeById = async (id: string): Promise<any> => {

    try {

        const result = await RecipesDatabase.connection(RecipesDatabase.TABLE_NAME)
            .select("id", "title", "description", "created_at")
            .where("id", "like", id)

        return result[0]

    } catch (error:any) {
        throw new CustomError(error.message)
        
    }

}


}
