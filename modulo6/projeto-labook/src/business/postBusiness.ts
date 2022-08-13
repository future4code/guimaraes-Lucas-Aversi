import { postsInputDTO, posts, Posts } from "../model/Posts";
import { PostDatabase } from "../data/dataBases/postsDatabase";
import { generateId } from "../services/idGenerator";
import { creationMoment } from "../services/dateGenerator";

export class PostsBusiness{
    public create = async (input:postsInputDTO):Promise<void>=>{
        const {photo, description,type,author_id}=input

        const id = generateId()
        const created_at = creationMoment()

        const postDatabase = new PostDatabase()
        const post: posts = {
            id,
            photo,
            description,
            type,
            created_at,
            author_id
        }
        await postDatabase.create(post)
    }

    async getPostBusiness (): Promise<Posts[]>{

        const postDB = new PostDatabase();
        const posts = await postDB.getAllPosts();
        return posts
    }
}