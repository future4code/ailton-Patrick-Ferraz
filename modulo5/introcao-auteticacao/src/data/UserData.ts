import User from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
public async createUser(user:User){
    await this.getConnection().insert({
        id: user.getId(),
        email:user.getEmail(),
        password:user.getPassword(),
    }).into("User")
}

public async getUserByEmail (email:string){
    const result = await this.getConnection().select("*").from("User").where({email: email});
    return result
}

public async getUserByPassword (password:string){
    const result = await this.getConnection().select("*").from("User").where({password: password});
    return result
}

public async getUseById (id:string){
    const result = await this.getConnection().select("*").from("User").where({id})
    return result[0]

}

}