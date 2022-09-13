###Exercício 1

a) Salt : É uma das vantagens do BCrypt, pois acrescenta aleatoriamente sequências de caracteres a senha, projetando resultados criptográficos complecos e aumentantando a segurança contra ataques de força bruta, como o rainbow tables. Um hash sempre será diferente, mesmo que a senha seha igual;

Rounds: Significam o fator de custo. O custo controla quanto tempo é necessário para calcular um único hash BCrypt. Quanto maior o fator de custo, mais rodadas de hash são feitas e mais lento será o processamento para calcular o hash associado a senha. Por padrão, o valor utilizado é 10, mas é importante salientar que um valor mais alto demandará mais tempo para encontrar as possíveis senhas nos casos de ataque de força bruta. Então esse valor deve ser pequeno o suficiente para não demorar na verificação no login do usuário.; 12; Boa velocidade na verificação de login do usuário.

b e c)

```
export class HashManager{
    async hashDaSenha(senha:string):Promise<string> {
        const cost = Number(process.env.COST);
        const salt = await bcryptjs.genSalt(cost)
        const hash = await bcryptjs.hash(senha, salt)
        return hash
    }

    async compare(senha: string, hash: string):Promise<boolean> {
        return bcryptjs.compare(senha, hash)
    }
}

```

### Exercício 2

a) O primeiro a ser modificado deve ser o signup

b)
```
export class UserEndpoint{
    public async signUp(req:Request, res:Response) {
        try {

            const {email, password} = req.body
            if(!email || !password){
                throw new MissingFields()
            }
            
            const userDatabase = new UserDatabase()

            const emailAlreadyExist = await userDatabase.getUserByEmail(email)

            if(emailAlreadyExist){
                throw new EmailAlreadyExist()
            }

            const id = new GenerateId().createId()

            const hashPassword = await new HashManager().hashDaSenha(password)

            const user = new User(id,email,hashPassword)

            const response = await userDatabase.createUser(user)

            const token = new Authenticator().generateToken({id})

            res.status(201).send({message: response, token})

        } catch (error:any) {
            res.status(error.statusCode ||  500).send({message: error.message});
        }
    }
}
```

c)

```
  public async login(req: Request, res: Response){
        try {
            const {email,senha} = req.body

            if(!email || email.indexOf('@') === -1){
                throw new InvalidEmail()
            }

            const userDatabase = new UserDatabase()

            const emailExist = await userDatabase.getUserByEmail(email)
            if(!emailExist){
                throw new InvalidCredencial()
            }

            const correctPassword = await new HashManager().compare(senha, emailExist.getPassword())

            if(!correctPassword){
                throw new InvalidCredencial()
            }

            const token = new Authenticator().generateToken({id: emailExist.getId()})

            res.status(200).send({token})

        } catch (error:any) {
            res.status(error.statusCode || 500).send({message: error.message});
        }
    }
```

### Exercício 3

a)
ALTER TABLE User ADD COLUMN role VARCHAR(255) DEFAULT "normal";

b)

```
import * as jwt from "jsonwebtoken";

interface AuthenticationData{
    id:string,
    role:string
   
}

export class Authenticator {

    generateToken(info: AuthenticationData): string{

        const token = jwt.sign(
            {id: info.id,
            },
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_EXPIRATION_TIME}
        )
        return token;
    }

    getTokenData(token: string): AuthenticationData {

        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        );

        return payload as AuthenticationData

    }
}
```

c) 
```
   public async signUp(req:Request, res:Response) {
        try {

            const {email, password, role} = req.body
            if(!email || !password || !role) {
                throw new MissingFields()
            }
            
            const userDatabase = new UserDatabase()

            const emailAlreadyExist = await userDatabase.getUserByEmail(email)

            if(emailAlreadyExist){
                throw new EmailAlreadyExist()
            }

            const id = new GenerateId().createId()

            const hashPassword = await new HashManager().hashDaSenha(password)

            const user = new User(id,email,hashPassword, role)

            const response = await userDatabase.createUser(user)

            const token = new Authenticator().generateToken({id, role})

            res.status(201).send({message: response, token})

        } catch (error:any) {
            res.status(error.statusCode ||  500).send({message: error.message});
        }
    }
```

d)

```
   public async login(req: Request, res: Response){
        try {
            const {email,senha} = req.body

            if(!email || email.indexOf('@') === -1){
                throw new InvalidEmail()
            }

            const userDatabase = new UserDatabase()

            const emailExist = await userDatabase.getUserByEmail(email)
            if(!emailExist){
                throw new InvalidCredencial()
            }

            const correctPassword = await new HashManager().compare(senha, emailExist.getPassword())

            if(!correctPassword){
                throw new InvalidCredencial()
            }

            const token = new Authenticator().generateToken({id: emailExist.getId(), role: emailExist.getRole()})

            res.status(200).send({token})

        } catch (error:any) {
            res.status(error.statusCode || 500).send({message: error.message});
        }
    }
```

### Exercício 4

a) 
