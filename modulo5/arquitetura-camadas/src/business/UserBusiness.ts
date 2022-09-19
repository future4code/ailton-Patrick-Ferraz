import { UserDatabase } from "../database/UserDatabase";
import { EmailAlreadyExist } from "../error/EmailAlreayExist";
import { MissingFields } from "../error/MissingFields";
import { NameLenght } from "../error/NameLenght";
import { PasswordLenght } from "../error/PasswordLenght";
import { User, userDTO } from "../model/User";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";


export class UserBusiness {
    async create(userDTO: userDTO): Promise<string> {
        const {name, email,password,role} = userDTO;

        if(!name || !email || !password || !role) {
            throw new MissingFields()
        }

        if(name.length < 3){
            throw new NameLenght()
        }

        if (password.length < 6) {
            throw new PasswordLenght()
        }

        const userData = new UserDatabase()

        const emailAlreadyExist = await userData.getUserByEmail(email)

        if(emailAlreadyExist){
            throw new EmailAlreadyExist()
        }

        const id = new IdGenerator().idGenerator();
        const hashPassword = await new HashManager().hash(password)
        const user = new User(id, name,email, hashPassword,role)

        const response = await userData.createUser(user);
        const token = new Authenticator().generateToken({id,role})

        return token
}
}