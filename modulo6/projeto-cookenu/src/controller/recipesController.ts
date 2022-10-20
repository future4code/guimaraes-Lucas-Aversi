import { Request, Response } from "express";
import { RecipesBusiness } from "../business/recipesBusiness"
import { CustomError } from "../error/customError";
import { recipeDeleteInputDTO, recipeInputDTO } from "../model/Recipes";

export class RecipeController {

  private recipeBusiness: RecipesBusiness
  constructor(){
    this.recipeBusiness = new RecipesBusiness();
  };;

  public create = async (req: Request, res: Response):Promise<void>=>{
    try {
      const { title, description, instructions, author_id } = req.body;
      const token = req.headers.authorization as string;
      const recipe : recipeInputDTO = {title,description,instructions,author_id};

      const recipes = await this.recipeBusiness.createRecipe(recipe,token);

      res.status(201).send({ message: "Receita cadastrada com sucesso" });
    } catch (error:any) {
      res.status(400).send(error.message);
    };
  };;

  public getAll= async (req: Request, res: Response)=>{
    try {
      const token = req.headers.authorization as string;

      const recipes = await this.recipeBusiness.getAllRecipesBusiness(token);

      res.status(201).send(recipes);      
    } catch (error:any) {
      res.status(400).send(error.message);
    };
  };;


  public getRecipeById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const token = req.headers.authorization as string;
        const input = {id,token};

        const result = await this.recipeBusiness.getRecipeById(input);

        res.status(200).send(result);
    } catch (error:any) {
        res.status(400).send(error.message);
    };
  };;
  
    public getRecipeByAuthor = async (req:Request, res:Response)=>{
    try {
      const id= req.params.id;

      const result = await this.recipeBusiness.getRecipeByAuthor(id);
      
      res.status(200).send(result);
    } catch (error:any) {
      res.status(400).send(error.message);      
    };
  };;

  public editRecipe = async(req:Request, res:Response)=>{
    try {
      const { title, description, instructions} = req.body;
      const {id,author_id} = req.params
      const token = req.headers.authorization as string;
      const input = {title,description,instructions,author_id,id}
            
      const result = await this.recipeBusiness.editRecipe(input,token);

      res.status(200).send({ message: "Recipe has been changed sucesfully" });      
    } catch (error:any) {
      res.status(400).send(error.message);      
    };
  };;

  public deleteRecipe = async (req:Request, res:Response):Promise<void>=>{
    try {
      let {id} = req.body;
      let author_id = req.params.authorId
      const token = req.headers.authorization as string;        
      const input: recipeDeleteInputDTO={id,author_id};
      
      const deleteRecipe = await this.recipeBusiness.deleteRecipe(input,token);

      res.status(201).send({ message: "Recipe Deleted Sucessfully"});        
    } catch (error:any) {
      res.status(400).send(error.message);            
    };
};;
};;
