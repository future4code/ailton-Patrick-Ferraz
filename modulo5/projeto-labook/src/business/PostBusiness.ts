import { PostDatabase } from "../database/PostDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { IDeletePostDTO, IGetAllPostsDTO, IGetPostsOutputDTO, IGetPostsPosts, IPostCreateDTO, Post } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

public postCreate = async(input:IPostCreateDTO) =>{
    
    const token = input.token
    const content = input.content

    const payload = this.authenticator.getTokenPayload(token)

    if(!payload){
        throw new AuthenticationError()
    }
    
    if(content.length < 1){
        throw new Error('O seu Post deve possuir no mínimo 1 caractere.')
    }

    const idUser = this.authenticator.getTokenPayload(token)
    const idPost = this.idGenerator.generate()

    const post = new Post(
        idPost,
        content,
        idUser.id
    )

    await this.postDatabase.postCreate(post)
    
  return post

}

public getAllPosts = async(input:IGetAllPostsDTO) =>{
    
        const token = input.token


    const payload = this.authenticator.getTokenPayload(token)

    if(!payload){
        throw new AuthenticationError()
    }


    const postDB = await this.postDatabase.getAllPosts()

    const posts = postDB.map(postDB =>{
        const post = new Post(
            postDB.id,
            postDB.content,
            postDB.user_id,
            postDB.like
           
        )

        const postResponse:IGetPostsPosts ={
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId(),
            likes: post.getLikes()
            
        }

        return postResponse
    }
    )
    const response:IGetPostsOutputDTO = {
        posts
    }
     return response
}

public deletePost = async(input:IDeletePostDTO) =>{
    const token = input.token
    const idToDelete = input.idToDelete

    const payload = this.authenticator.getTokenPayload(token)

    if(!payload){
        throw new AuthenticationError()
    }

    const userBD = await this.postDatabase.findById(idToDelete)

    if(!userBD){
        throw new Error("Post não existe no Bando de Dados.")
    }

    await this.postDatabase.deletePost(idToDelete)

    const response = {
        message:"Post deletado com sucesso."
    }

    return response
}
}