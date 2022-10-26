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

async login(req:Request, res:Response) {
    try {
        const {email,password} = req.body;
        const userBusiness = new UserBusiness();
        const token = await userBusiness.login(email,password)
        res.status(201).send({message: token})

    } catch ( error:any) {
        res.status(error.statusCode || 500).send({ message: error.message })
    }
}

async getProfile(req:Request, res:Response){
    try {
        
        const tokenUser = req.headers.authorization as string
        
        const userBusiness = new UserBusiness()

        const userProfile = await userBusiness.getProfile(tokenUser)

        res.status(201).send({User: userProfile})
    } catch (error:any) {
        res.status(error.statusCode || 500).send({ message: error.message })
    }
}

async deleteAccount (req: Request, res: Response) {
    try {

        const token = req.headers.authorization
        const id = req.params.id

        const userBusiness = new UserBusiness()
        
    } catch (error:any) {
        res.status(error.statusCode || 500).send({ message: error.message })
    }
}

}