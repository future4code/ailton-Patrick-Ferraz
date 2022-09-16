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

export async function GetProfile(req:Request, res:Response){
    try {
     
  const token = req.headers.authorization as string;

  if(!token){
    throw new AuthorizationError()
  }

  //const authenticator = new Authenticator();
  //const tokenData = authenticator.getTokenData(token);

  const userDatabase = new UserDatabase();
  
  const user = await userDatabase.getUser()

  res.status(200).send(user)

    } catch (error:any) {
        res.status(400).send({message: error.message});
    }
}