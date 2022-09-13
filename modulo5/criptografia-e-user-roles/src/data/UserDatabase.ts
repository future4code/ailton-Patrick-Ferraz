import User from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
public async createUser(user:User): Promise<string>{
    await this.getConnection().insert({
        id:user.getId(),
        email:user.getEmail(),
        password:user.getPassword(),
        role: user.getRole()
    }).into("User");
    return `Email ${user.getEmail()} cadastrado com sucesso`
}

public async getUserByEmail(email:string):Promise<User|undefined> {
    const result = await this.getConnection()
    .select("*")
    .from("User")
    .where({email:email})

    if(!result.length){
        return undefined;
    }

    return new User(result[0].id,result[0].email,result[0].password,result[0].role )
}
}