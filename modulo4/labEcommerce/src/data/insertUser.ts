import { userData } from "../Types/typesUser"
import { connection } from "./connection"

export default async function insertUser(insertUser:userData):Promise<string>{
    await connection("labecommerce_users").insert({
        id: insertUser.id,
        name: insertUser.name,
        email: insertUser.email,
        password: insertUser.password,

    })

  
    return `User ${insertUser.name} created.`
}