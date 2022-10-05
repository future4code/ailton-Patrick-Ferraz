import { IPizzaDB, Pizza } from "../models/Pizza"
import { BaseDatabase } from "./BaseDatabase"

export class PizzaDatabase extends BaseDatabase {
    public static TABLE_PIZZAS = "Amb_Pizzas"
    public static TABLE_INGREDIENTS = "Amb_Ingredients"
    public static TABLE_PIZZAS_INGREDIENTS = "Amb_Pizzas_Ingredients"

    public toPizzaDBModel = (pizza: Pizza): IPizzaDB => {

        return {
            name: pizza.getName(),
            price: pizza.getPrice()
        }
    }

    // public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
    //     const result: IUserDB[] = await BaseDatabase
    //         .connection(UserDatabase.TABLE_USERS)
    //         .select()
    //         .where({ email })

    //     return result[0]
    // }

    // public createUser = async (user: User): Promise<void> => {
    //     const userDB = this.toUserDBModel(user)

    //     await BaseDatabase
    //         .connection(UserDatabase.TABLE_USERS)
    //         .insert(userDB)
    // }
}