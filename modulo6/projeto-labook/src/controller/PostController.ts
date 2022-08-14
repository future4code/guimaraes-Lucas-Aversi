import { Request, Response } from "express";
import { PostsBusiness } from "../business/postBusiness"
import { postsInputDTO } from "../model/Posts";

export class PostController {

  async create(req: Request, res: Response):Promise<void> {
    try {
      const { photo, description, type, author_id } = req.body;

      const postsBusiness = new PostsBusiness();
      const post : postsInputDTO = {
        photo,
        description,
        type,
        author_id

      }
      await postsBusiness.createPostBusiness(post);

      res.status(201).send({ message: "Postado!" });

    } catch (error:any) {
      res.status(400).send(error.message);
    }
  }

  async getAll(req: Request, res: Response){
    try {
      const postsBusiness = new PostsBusiness()
      const posts = await postsBusiness.getPostBusiness()

      res.status(201).send(posts)
      
    } catch (error:any) {
      res.status(400).send(error.message);
    }
  }

  async getById(req: Request, res: Response){
    try {
      const {id}=req.params

      const postsBusiness = new PostsBusiness()
      const postsById = await postsBusiness.getPostById(id)

      res.status(201).send(postsById)
      
    } catch (error:any) {
      res.status(400).send(error.message);
    }
  }
}
