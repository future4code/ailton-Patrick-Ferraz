import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { userDTO } from "../model/User";

export class UserController{
    
async singup(req:Request,res:Response){
    try {
        const {name, email, password,role} = req.body;
        
        const userBusiness = new UserBusiness()

        const user:userDTO = {
            name,
            email,
            password,
            role
        }

        const token = await userBusiness.create(user)
        res.status(200).send({message:token})

    } catch (error:any) {
        res.status(error.statusCode || 500).send({ message: error.message })
    }
    }
}