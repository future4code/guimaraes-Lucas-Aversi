import { Posts, posts } from "../../model/Posts";
import { BaseDatabase } from "./BaseDatabase";
import { UserDatabase } from "./userDatabase";

export class PostDatabase extends BaseDatabase{
    private static TABLE_NAME = "labook_posts";
    
    async create(posts: posts):Promise<void>{
        await PostDatabase.connection
        .insert({
            id:posts.id,
            photo:posts.photo,
            description:posts.description,
            type:posts.type,
            created_at:posts.created_at,
            author_id:posts.author_id
        })
        .into(PostDatabase.TABLE_NAME);
    }

    async getAllPosts():Promise<Posts[]>{
        const posts = await PostDatabase.connection(PostDatabase.TABLE_NAME)
        return posts
    }

    async getById(id:string):Promise<Posts[]>{
        const userById = await  UserDatabase.connection(PostDatabase.TABLE_NAME)
        .select()
        .where("id", id)
        return userById
    }
}
