export interface IPostDB {
    id: string,
    content: string,
    user_id: string
    like?:number
}

export interface ILikeDB {
    id: string,
    post_id: string,
    user_id: string
}

export class Post {
    constructor(
        private id: string,
        private content: string,
        private userId: string,
        private likes: number = 0
    ) {}

    public getId = () => {
        return this.id
    }

    public getContent = () => {
        return this.content
    }

    public getUserId = () => {
        return this.userId
    }

    public getLikes = () => {
        return this.likes
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setContent = (newContent: string) => {
        this.content = newContent
    }

    public setUserId = (newUserId: string) => {
        this.userId = newUserId
    }

    public setLikes = (newLikes: number) => {
        this.likes = newLikes
    }
}

export interface IPostCreateDTO{
    token: string,
    content: string,
}

export interface IGetAllPostsDTO{
    token:string

}

export interface IGetPostsDBDTO {
    search: string,
    order: string,
    sort: string,
    limit: number,
    offset: number
}

export interface IGetPostsPosts{
    id:string,
    content:string,
    user_id:string,
    likes:number,
}

export interface IGetPostsOutputDTO {
    posts: IGetPostsPosts[]
}