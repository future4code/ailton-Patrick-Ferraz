import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    
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

public async findUserByEmail(email:string): Promise<User>{
    try {
        
        const user = await BaseDatabase.connection('cookenu_user')
        .select("*")
        .where({email});

        return user [0] && User.toUserModel(user[0])

    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
    }
}

public async getUser(id:string): Promise<User> {
    try {

        const user = await BaseDatabase.connection('cookenu_user')
        .select('id','name','email')
        .where({id})
        return user[0] && User.toUserModel(user[0])
        
    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
    }
}

}