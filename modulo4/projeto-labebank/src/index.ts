import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { account, Users, BankStatement } from './data';

const app:Express = express();

app.use(express.json());
app.use(cors());

app.get("/users",(req:Request, res:Response)=>{
    res.status(200).send(account)
})

app.post("/users" ,(req:Request,res: Response)=>{
    let errorCode:number = 400;
    try{
        const {name,cpf,bithDate} = req.body

        const newAccount:Users = {
            name: name,
            cpf: cpf,
            bithDate: bithDate,
            balance: 0,
            bankStatement: []
        }

        account.push(newAccount)
        res.status(200).send({message: 'Account created successifuly.'})

    }catch(error:any){
        res.status(errorCode).send({message: error.message})

    }
})

app.listen(3003, () =>{
    console.log('Server is running in http://localhost:3003')
})