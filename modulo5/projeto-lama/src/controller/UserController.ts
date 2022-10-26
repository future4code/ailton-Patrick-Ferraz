import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";
import { IloginInputDTO, ISingupInputDTO } from "../models/User";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

public singup = async (req:Request, res:Response) => {
    try {
        const input:ISingupInputDTO = {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        }

        const response = await this.userBusiness.singup(input);

        res.status(201).send(response)

    } catch (error:any) {

        if (error instanceof BaseError) {
            return res.status(error.statusCode).send({ message: error.message })
        }
        res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
    }
        
    }
 public login = async(req: Request, res: Response) =>{
    try {
        const input:IloginInputDTO = {
            email:req.body.email,
            password:req.body.password,
        }
        
        const response = await this.userBusiness.login(input)

        res.status(200).send(response)
        
    } catch (error:any) {
       if(error instanceof BaseError) { 
        return res.status(error.statusCode).send({message:error.message})
       }
       res.status(500).send({message:"Erro inesperado ao logar usuário"})
    }
 }   

}