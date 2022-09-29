import { UserDatabase } from "../database/UserDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { ConflictError } from "../errors/ConflictError"
import { ParamsError } from "../errors/ParamsError"
import { IloginInputDTO, ILoginOutputDTO, ISingupInputDTO, ISingupOutputDTO, User, USER_ROLES } from "../models/User"
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

public singup = async (input:ISingupInputDTO) : Promise <ISingupOutputDTO> => {
    const {name,email,password} = input

    if(!name || !email || !password){
        throw new ParamsError("Paramêtro inválido: Todos os parêmtros devem ser peenchidos")
    }

    if(typeof name !== 'string'){
        throw new ParamsError("Parâmetro 'name' inválido: o parâmetro passado deve ser do tipo string")
    }

    if(typeof email !== 'string'){
        throw new ParamsError("Parâmetro 'email' inválido: o parâmetro passado deve ser do tipo string")
    }

    if(typeof password !== 'string'){
        throw new ParamsError("Parâmetro 'password' inválido: o parâmetro passado deve ser do tipo string")
    }

    if(name.length < 3){
        throw new ParamsError("Parâmetro 'name' inválido: O name deve possuir ao menos 3 caracteres")
    }

    if(password.length < 6){
        throw new ParamsError("Parâmetro 'password' inválido: O password deve possuir ao menos 6 caracteres")
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        throw new ParamsError("Parâmetro 'email' inválido")
    }

    const isEmailAlreadyExist = await this.userDatabase.findByEmail(email)

    if(isEmailAlreadyExist) {
        throw new ConflictError("O email já existe")
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

    const payload: ITokenPayload ={
        id:user.getId(),
        role:user.getRole()
    }

    const token = this.authenticator.generateToken(payload)
     
    const response= {
        message: "Cadastro Realizado com sucesso!",
        token
    }

    return response
}

public login = async (input:IloginInputDTO):Promise <ILoginOutputDTO> =>{
    const {email, password} = input

    if(!email || !password){
        throw new ParamsError("Parâmetro invalido: Todos os parâmetros devem ser peenchidos")
    }

    if(typeof email !== 'string'){
        throw new ParamsError("Parâmetro invalido: O parâmetro 'email' deve ser do tipo string")
    }

    if(typeof password !== 'string'){
        throw new ParamsError("Parâmetro invalido: O parâmetro 'password' deve ser do tipo string")
    }

    if(password.length < 6){
        throw new ParamsError("Parâmetro 'password' inválido: O password deve possuir ao menos 6 caracteres")
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        throw new ParamsError("Parâmetro 'email' inválido")
    }

    const isEmailAlreadyExist = await this.userDatabase.findByEmail(email)

    if(!isEmailAlreadyExist) {
        throw new ConflictError("Email não cadastrado")
    }

    const userDB = await this.userDatabase.findByEmail(email)

    const user = new User(
        userDB.id,
        userDB.name,
        userDB.email,
        userDB.password,
        userDB.role
    )

    const isPasswordCorrect = await this.hashManager.compare(
        password,
        user.getPassword()
    )
    
    if(!isPasswordCorrect){
        throw new AuthenticationError("Password incorreto")
    }

    const payload: ITokenPayload = {
        id: user.getId(),
        role: user.getRole()
    }

    const token = this.authenticator.generateToken(payload)

    const response:ILoginOutputDTO = {
        message: 'Login realizado com sucesso',
        token
    }

    return response

}
}