import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Incorrect } from "../error/Incorrect";
import { InvalidEmail } from "../error/InvalidEmail";
import { MissingFields } from "../error/MissingFields";
import { UserNotRegistered } from "../error/UserNotRegistered";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";


export async function Login(req:Request, res:Response){
    try {
     
    const {email,password} = req.body;
    
    if(!email || !password){
        throw new MissingFields();
    }

    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);

    if(!user){
        throw new UserNotRegistered();
    }

   const hashManager = new HashManager();
   const passwordIsCorrect = await hashManager.compare(password,user.getPassword());

   if(!passwordIsCorrect){
    throw new Incorrect()
   }

    const authenticator = new Authenticator()
    const token = authenticator.generate({id:user.getId()})

    res.status(201).send({message: 'Usuário logado com sucessso', token})


    } catch (error:any) {
        res.status(400).send({message: error.message});
    }
}