import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { InvalidEmail } from "../error/InvalidEmail";
import { MissingFields } from "../error/MissingFields";
import { PasswordLength } from "../error/PasswordLenght";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function SingUp(req:Request, res:Response){
    try {
     
    const {name,email,password} = req.body;
    
    if(!name || !email || !password){
        throw new MissingFields();
    }

    if(email.indexOf("@") === -1){
        throw new InvalidEmail();
    }

    

    //if(!email.includes("@")){
   //     throw new InvalidEmail();
  //  }


    if(password.length<6){
        throw new PasswordLength()
    }

   const idGenerator = new IdGenerator();
   const id = idGenerator.generateId();

   const hashManager = new HashManager();
   const hashPassword = await hashManager.hash(password);

   const newUser = new User(id,name,email,hashPassword);

   const userDatabase = new UserDatabase();
    await userDatabase.createUser(newUser);

    const authenticator = new Authenticator()
    const token = authenticator.generate({id})

    res.status(201).send({message: 'Usuário criado com sucessso', token})


    } catch (error:any) {
        res.status(400).send({message: error.message});
    }
}