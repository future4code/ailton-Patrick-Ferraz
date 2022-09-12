import express, { Express, Request,Response } from "express";
import cors from "cors";
import { User, users } from "./data";


const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("pong!")
  })

//exercício 1:
//a) Método get;
//b) Através do patch /users, já que o endpoint é para pegar todos os usuários do array;

app.get('/users',(req:Request,res:Response)=>{
        res.status(200).send(users)
});

//exercício 2:
//a) Por Query. Porque é um tipo de requisição que procura por um type específico
//b) Sim, através de um enum

app.get('/users/type',(req:Request, res:Response)=>{
    let codeError: number = 400;
    try {
      const type: string = req.query.type as string
      const user: User[] = users.filter((users) => users.type === type)
      if (!user) {
        codeError = 404;
        throw new Error("User not found");
      } else if (type !== "NORMAL" && type !== "ADMIN") {
        codeError = 400;
        throw new Error("Type not found");
      }
      res.status(200).send(user);
  
    } catch (error:any) {
      res.status(codeError).send({ message: error.message });
    }
    }
  );

//exercício 3:
//a) Geralmente é utilizado o query
//b) Mensagem implementada no código

app.get('/users/name',(req:Request, res:Response)=>{
    let codeError: number = 400;
    try{
        const name: string = req.query.name as string
        const user: User | undefined = users.find((users)=> users.name === name)
        if(!user){
        codeError = 404;
        throw new Error ("User not found")
    }
    res.status(200).send(user)
    } catch(error:any){
        res.status(codeError).send({message: error.message})
    }
})


//exercício 4:
//a) Acontece um erro. O método put é utilizado para modificar completamente um recurso que já existe, diferente do post, que é para criar um recurso novo;
//b)Não, pois não estamos modificando nenhum recurso existente, e sim criando um novo.

app.post('/users', (req:Request,res:Response)=>{
    let codeError: number = 400;
    try{
        const {id,name,email,type,age} = req.body
        if(!id || !name || !email || !type || !age){
            codeError = 422
            throw new Error('Please, check the fields.')
        }
        const newUser: User ={
            id,
            name,
            email,
            type,
            age
        }

        users.push(newUser)
        res.status(200).send({message: 'User created successefuly.'})

    }catch(error:any){
        res.status(codeError).send({message: error.message})
    }
})

app.listen(3003, () => {
       console.log(`Server is running in http://localhost:3003`);
});