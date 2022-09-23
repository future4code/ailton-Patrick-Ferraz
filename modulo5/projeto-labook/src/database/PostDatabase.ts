import { IGetPostsDBDTO, IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"


    public postCreate = async(post:Post) =>{
        const postDB:any ={
        id:post.getId(),
        content:post.getContent(),
        user_Id:post.getUserId(),
        }
        await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .insert(postDB)
    }

     public getAllPosts = async () =>{
     


        const postsDb:IPostDB[] = await PostDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select("*")

        return postsDb
     }
}