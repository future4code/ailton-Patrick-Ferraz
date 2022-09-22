import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { IPostCreateDTO } from "../models/Post";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

public postCreate = async(req:Request, res:Response)=>{
    try {

        const input: IPostCreateDTO={
            token: req.headers.authorization as string,
            content:req.body.content
        }
        
        const response = await this.postBusiness.postCreate(input)
        res.status(200).send({
            message:'Post criado com sucesso.',
            response})
            
    } catch (error:any) {
        res.status(400).send({ message: error.message })
    }
}

}