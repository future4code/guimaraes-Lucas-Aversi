import { Request, Response } from "express";
import { RecipesBusiness } from "../business/recipiesBusiness"
import { recipeInputDTO } from "../model/Recipies";

export class RecipeController {

  private recipeBusiness: RecipesBusiness
  constructor(){
    this.recipeBusiness = new RecipesBusiness();
  }

  public create = async (req: Request, res: Response):Promise<void>=>{
    try {
      const { title, description, instructions, author_id } = req.body;
      if(!title){
        throw new Error ("Você não passou o title")
      }
      if(!description){
        throw new Error ("Você não passou o description")
      }
      if(!instructions){
        throw new Error ("Passe uma instrução")
      }
      if(!author_id){
        throw new Error ("Você não passou a id de quem ta postando a receita")
      }

      const recipe : recipeInputDTO = {
        title,
        description,
        instructions,
        author_id
      }
      const recipes = await this.recipeBusiness.createRecipe(recipe);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });

    } catch (error:any) {
      res.status(400).send(error.message);
    }
  }

  public getAll=async(req: Request, res: Response)=>{
    try {
      const recipes = await this.recipeBusiness.getAllRecipesBusiness()

      res.status(201).send(recipes)
      
    } catch (error:any) {
      res.status(400).send(error.message);
    }
  }
}
