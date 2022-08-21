import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { account, Users} from './data';

const app:Express = express();

app.use(express.json());
app.use(cors());

app.get("/users/accounts",(req:Request, res:Response)=>{
    try{
        if(!account.length){
            res.statusCode=404
            throw new Error ("Nenhuma conta encontrada.")
        }
        res.status(200).send(account)
    }catch(error:any){
    res.send(error.message)
    } 
})

app.post("/users/create" ,(req:Request,res: Response)=>{
    let errorCode:number = 400;
    try{
        const {name,cpf,bithDate} = req.body
        const [day, month, year] = bithDate.split("/")
        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)
        const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime()

        const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365
        if (ageInYears < 18){
            res.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos") 
         }

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