import { User, UserBD } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

private static tableName = 'cookenu_user'
    
public async createUser(user:User){
    try {
        
        await BaseDatabase.connection('cookenu_user').insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
        })

    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
    }
}

public async findUserByEmail(email:string): Promise<User | undefined>{
    try {
        
        const user = await BaseDatabase.connection('cookenu_user')
        .select("*")
        .where({email});
        if (!user.length) {
            return undefined
        }

        return new User(user[0].id, user[0].nome, user[0].email, user[0].senha)
    

    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
    }
}

public async getUser(id:string): Promise<UserBD | undefined> {
    try {

        const user = await BaseDatabase.connection()
        .select('*')
        .from(UserDatabase.tableName)
        .where({id})

        if (!user.length) {
            return undefined
        }

        const response:UserBD = {
            id: user[0].id,
            name: user[0].name,
            email: user[0].email
        }

        return response
        
    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
    }
}

}