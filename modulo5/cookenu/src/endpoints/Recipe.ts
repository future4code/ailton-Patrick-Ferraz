import { Request, Response } from "express";
import { RecipeData } from "../data/RecipeData";
import { AuthorizationError } from "../error/AuthorizationError";
import { MissingFields } from "../error/MissingFields";
import { Recipe } from "../model/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class RecipeEndpoint {
  async createRecipe(req:Request,res:Response){
    try {

        const token = req.headers.authorization
        const {title,description} = req.body

        if(!title || !description){
            throw new MissingFields()
        }

        if(!token){
            throw new AuthorizationError()
        }

        const id = new Authenticator().getTokenData(token)
        const idRecipe = new IdGenerator().generateId()
        const date = new Date()

        const recipe = new Recipe(idRecipe, title, description,date,id.id)
        const recipeData = new RecipeData()





        
    } catch (error:any) {
        res.status(400).send({message: error.message});
    }
  }
}