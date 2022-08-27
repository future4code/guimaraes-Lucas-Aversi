import { recipe, Recipes } from "../../model/Recipies";
import { BaseDatabase } from "./BaseDatabase";

export class RecipesDatabase extends BaseDatabase {
  private static TABLE_NAME = "cookenu_recipes";

  async create(recipie: recipe): Promise<void> {
    await RecipesDatabase.connection
      .insert({
        id: recipie.id,
        title: recipie.title,
        description: recipie.description,
        instructions: recipie.instructions,
        author_id:recipie.author_id
      })
      .into(RecipesDatabase.TABLE_NAME);
  }

  async getAllRecpies ():Promise <Recipes[]> {
    const recipe = await RecipesDatabase.connection(RecipesDatabase.TABLE_NAME).select()

    return recipe
  }
}
