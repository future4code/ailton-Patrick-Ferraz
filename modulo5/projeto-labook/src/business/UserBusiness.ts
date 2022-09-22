import { UserDatabase } from "../database/UserDatabase"
import { ParamsError } from "../errors/ParamsError"
import { ILoginInputDTO, ISingUpInputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public singup = async (input:ISingUpInputDTO) =>{
        const name = input.name
        const email = input.email
        const password = input.password

        if(!name || !email || !password){
            throw new ParamsError()
        }

        if(name.length < 3) {
            throw new Error('O nome de usuário deve possuir ao menos 3 caracteres.')
        }

        if(password.length < 6){
            throw new Error('A senha deve possuir ao menos 6 caracteres.')
        }

        if(typeof email !== 'string'){
            throw new ParamsError()
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new ParamsError()
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if(userDB){
            throw new Error('E-mail já cadastrado.')
        }

        const id = this.idGenerator.generate()
        const hashPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashPassword,
            USER_ROLES.NORMAL
        )

        await this.userDatabase.createUser(user)

        const payload:ITokenPayload = {
            id:user.getId(),
            role:user.getRole() 
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message:"Usuário logado com sucesso.",
            token
        }

        return response
    }

    public login = async(input:ILoginInputDTO) =>{
        const email = input.email
        const password = input.password

        if(!email || !password){
            throw new ParamsError()
        }
        if (typeof email !== "string" || email.length < 3) {
            throw new ParamsError()
        }
        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new ParamsError()
        }

        if (typeof password !== "string" || password.length < 3) {
            throw new ParamsError()
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if(!userDB){
            throw new Error('E-mail não cadastrado.')
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const ComparePassword = await this.hashManager.compare(password,user.getPassword())


        if(!ComparePassword){
        throw new Error('Senha incorreta.')}

        const payload:ITokenPayload = {
            id:user.getId(),
            role:user.getRole() 
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message:"Usuário cadastrado com sucesso.",
            token
        }

        return response
}
}