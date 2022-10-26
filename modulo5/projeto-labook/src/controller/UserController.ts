import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ILoginInputDTO, ISingUpInputDTO } from "../models/User";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public singup = async(req:Request, res: Response) =>{
        try {
            const input: ISingUpInputDTO= {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.singup(input)

            res.status(200).send(response)
            
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input:ILoginInputDTO ={
                email:req.body.email,
                password:req.body.password
            }

            const response = await this.userBusiness.login(input)

            res.status(200).send(response)
            
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

}