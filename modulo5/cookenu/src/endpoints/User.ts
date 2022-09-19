import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { AuthorizationError } from "../error/AuthorizationError";
import { Incorrect } from "../error/Incorrect";
import { InvalidEmail } from "../error/InvalidEmail";
import { MissingFields } from "../error/MissingFields";
import { PasswordLength } from "../error/PasswordLenght";
import { UserNotRegistered } from "../error/UserNotRegistered";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";


export class UserEndpoint{

     async SingUp(req:Request, res:Response){
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

 async Login(req:Request, res:Response){
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

async  GetProfile(req:Request, res:Response){
    try {
     
  const token = req.headers.authorization as string;

  if(!token){
    throw new AuthorizationError()
  }

  const authenticator = new Authenticator();
  const tokenData = authenticator.getTokenData(token);

  const userDatabase = new UserDatabase();
  
  const user = await userDatabase.getUser(tokenData.id)

  res.status(200).send(user)

    } catch (error:any) {
        res.status(400).send({message: error.message});
    }
}

async GetAnotherProfile(req:Request, res:Response){
    try {
     
  const token = req.headers.authorization 
  const idAnotherPerson = req.params.id;

  if(!token){
    throw new AuthorizationError()
  }

  new Authenticator().getTokenData(token)


  const userData = new UserDatabase();
  const searchPerson = await userData.getUser(idAnotherPerson)

  if(!searchPerson){
    throw new Error ("Usuário não encontrado")
  }

  
  res.status(200).send(searchPerson)


    } catch (error:any) {
        res.status(400).send({message: error.message});
    }
}
}
