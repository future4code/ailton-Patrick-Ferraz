import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { MissingFields } from "../error/MissingFields";
import {EmailAlreadyExist} from "../error/EmailExist"
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { InvalidEmail } from "../error/InvalidEmail";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { InvalidRole } from "../error/InvalidRole";


export class UserEndpoint{
    public async signUp(req:Request, res:Response) {
        try {

            const {email, password, role} = req.body
            if(!email || !password || !role) {
                throw new MissingFields()
            }
            
            const userDatabase = new UserDatabase()

            const emailAlreadyExist = await userDatabase.getUserByEmail(email)

            if(emailAlreadyExist){
                throw new EmailAlreadyExist()
            }

            const id = new GenerateId().createId()

            const hashPassword = await new HashManager().hashDaSenha(password)

            const user = new User(id,email,hashPassword, role)

            const response = await userDatabase.createUser(user)

            const token = new Authenticator().generateToken({id, role})

            res.status(201).send({message: response, token})

        } catch (error:any) {
            res.status(error.statusCode ||  500).send({message: error.message});
        }
    }

    public async login(req: Request, res: Response){
        try {
            const {email,senha} = req.body

            if(!email || email.indexOf('@') === -1){
                throw new InvalidEmail()
            }

            const userDatabase = new UserDatabase()

            const emailExist = await userDatabase.getUserByEmail(email)
            if(!emailExist){
                throw new InvalidCredencial()
            }

            const correctPassword = await new HashManager().compare(senha, emailExist.getPassword())

            if(!correctPassword){
                throw new InvalidCredencial()
            }

            const token = new Authenticator().generateToken({id: emailExist.getId(), role: emailExist.getRole()})

            res.status(200).send({token})

        } catch (error:any) {
            res.status(error.statusCode || 500).send({message: error.message});
        }
    }
    async profile(req: Request, res: Response){
        try {
            const token = req.headers.authorization as string



            const authenticationData = new Authenticator().getTokenData(token)

            if(authenticationData.role !== "normal"){
                throw new InvalidRole()
            }

            const user = new UserDatabase()
            

        res.status(200).send()
            
        } catch (error:any) {
            res.status(error.statusCode || 500).send({message: error.message});
            
        }
    }

}