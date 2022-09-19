import { User } from "../model/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {

    public static TABLE_USERS = "Arq_Users"

async getUserByEmail(email: string): Promise< User | undefined> {

    const result = await BaseDatabase.connection('Arq_Users')
    .select("*")
    .where({email})

    if(!result.length){
        return undefined
    }

    return new User(result[0].id, result[0].name, result[0].email, result[0].password, result[0].role)
}

async createUser(user: User): Promise<string> {
    await BaseDatabase.connection('Arq_Users').insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole()
    })
    return `Usuario ${user.getName()} cadastrado com sucesso.`
}

async getUserById(id: string): Promise<any> {

    const result = await  BaseDatabase.connection('Arq_Users')
        .select("*")
        .where({ id })

    return result
}
}