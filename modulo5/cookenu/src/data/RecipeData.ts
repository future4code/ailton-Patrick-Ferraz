import { Recipe } from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeData extends BaseDatabase{

    async createRecipe(recipe: Recipe){
        try {
            await BaseDatabase.connection("cookenu_recipe").insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                create_date: recipe.getCreateDate(),
                user_id: recipe.getUserId(),
            })
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}