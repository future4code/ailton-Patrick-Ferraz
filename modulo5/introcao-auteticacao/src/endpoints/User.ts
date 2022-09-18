import { Request,Response} from "express";
import { UserDatabase } from "../data/UserData";
import User from "../model/User";
import Authenticator from "../services/Authentication";
import GenerateId from "../services/GenerateId";


export class UserEndpoint{
    public async createUser(req:Request, res: Response){
        try {
            const {email,password} = req.body

            if(!email || email.indexOf("@") === -1){
                throw new Error("Invalid email")
            }
            if(!password || password.length<6){
                throw new Error("Invalid password")
            }
            const userDataBase = new UserDatabase()

            const id = new GenerateId().generateId()

            const user = new User(id, email, password)

            await userDataBase.createUser(user)

            const token = new Authenticator().generateToken(id)

            res.status(200).send({message: "Success", token:token})


        } catch (error:any) {
            res.status(500).send({message: error.message});
        }

    }
    async login(req: Request, res: Response) {
        try {
            const {email,password} = req.body

            if(!email || email.indexOf("@") === -1){
                throw new Error("Invalid email")
            }
            if(!password || password.length<6){
                throw new Error("Invalid password")
            }
            const userDataBase = new UserDatabase()

          const senhaCorreta = await userDataBase.getUserByPassword(password)
          const EmailExist = await userDataBase.getUserByEmail(email)

          if (!senhaCorreta.length && !EmailExist.length) {
            throw new Error("Invalid");
        }

            const token = new Authenticator().generateToken(senhaCorreta[0].id)

            res.status(200).send({token})


        } catch (error:any) {
            res.status(500).send({message: error.message});
        }

    }

    async profile(req: Request, res: Response){
        try {
            const token = req.headers.authorization as string;

            const authorizationData = getData(token)
            
        } catch (error:any) {
            res.status(500).send({message: error.message});
            
        }
    }
}