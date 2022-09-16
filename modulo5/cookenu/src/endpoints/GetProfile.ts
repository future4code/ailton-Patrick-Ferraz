import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { AuthorizationError } from "../error/AuthorizationError";
import { Authenticator } from "../services/Authenticator";


export async function GetProfile(req:Request, res:Response){
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