import { UserDatabase } from "../database/UserDatabase";
import { EmailAlreadyExist } from "../error/EmailAlreayExist";
import { EmailNotRegistered } from "../error/EmailNotRegistered";
import { IncorrectPassword } from "../error/IncorrectPassword";
import { MissingFields } from "../error/MissingFields";
import { NameLenght } from "../error/NameLenght";
import { PasswordLenght } from "../error/PasswordLenght";
import { TokenNotPass } from "../error/TokenNotPass";
import { UserNotExist } from "../error/UserNotExist";
import { User, UserBD, userDTO, USER_ROLES } from "../model/User";
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


        async login(email:string, password:string):Promise<string>{
            if(!email || !password){
                throw new MissingFields()
            }

            const userData = new UserDatabase()
            const userDB = await userData.getUserByEmail(email)

            if(!userDB){
                throw new EmailNotRegistered()
        }

        const correctPassword = await new HashManager().compare(password,userDB.getPassword())

        if(!correctPassword){
        throw new IncorrectPassword()
        }

        const token = new Authenticator().generateToken({id:userDB.getId(), role: userDB.getRole()})

        return token
}

    async getProfile(token:string): Promise<UserBD>{
        if(!token){
            throw new TokenNotPass()
        }
        const userToken = new Authenticator().getTokenData(token)

        const userData = new UserDatabase()

        const result = await userData.getUserById(userToken.id)

        if(!result.length){

        throw new UserNotExist()
        }

        const user:UserBD = {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email
        }

        return result
    }

    async deleteAccount(token:string,id:string) {
        if(!token){
            throw new TokenNotPass()
        }

        const idPerson = new Authenticator().getTokenData(token)

        const userData = new UserDatabase()

        const userId = await userData.getUserById(id)

        if(!userId) {
            throw new Error('Usuário não encontrado')
        }

        if (idPerson.role === USER_ROLES.NORMAL && userId.id !== idPerson.id) {
            throw new Error("Somente administradores podem deletar usuarios")
        }
    }

}