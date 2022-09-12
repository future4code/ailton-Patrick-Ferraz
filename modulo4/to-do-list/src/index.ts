import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());



//Função e endpoin para criar usuário;

async function createUser(
    name:string,
    nickname:string,
    email:string
): Promise<any>{
    await connection('TodoListUser').insert({
        name,
        nickname,
        email,
    })
}

app.post('/user',async (req: Request,res:Response)=>{
    try {
        const {name,nickname,email} = req.body;

        if(!name || !nickname || !email)
        throw new Error('Todos os campos são obrigatorios.')

        await createUser(name,nickname,email);
        res.status(200).send('Usuário criado com sucesso.');

    } catch (error:any) {
        res.status(422).send({error: error.message})
        
    }
})

//Função e Endpoint para pegar usuário pelo id

async function getUserById(id:string): Promise<any> {
    const result = await connection('TodoListUser').where('id',id).select('id','nickname');
    return result[0];
}

app.get("/user/:id", async(req:Request, res:Response)=>{
    try {
        const {id} = req.params;
        const user = await getUserById(id);
        res.status(200).send(user)
    } catch (error:any) {
        res.status(400).send({error: error.message})
    }
})

//Função e Endpoint para Editar usuário

async function editUser(
    id:string,
    name:string,
    nickname:string,
    email:string
): Promise <any>{
    await connection('TodoListUser').where('id',id).update({
        name,
        nickname,
        email
    })
}

app.put("/user/edit/:id", async(req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const {name,nickname,email} = req.body
        const user = await editUser(id,name,nickname,email);
        res.status(200).send('Usuário atualizado com sucesso.')
    } catch (error:any) {
        res.status(400).send({error: error.message})
    }
})

//Função e Endpoint para criar tarefa

async function createTask (
    title:string,
    description:string,
    limitDate:string,
    creatorUserId:string
): Promise <any>{
    await connection ('TodoListTask').insert({
        title,
        description,
        limitDate,
        creatorUserId
    })
}

//função para formatar data
async function formatDate (date:string): Promise<string> {
    const [day,moth,year] = date.split('/');
    return `${day}/${moth}/${year}`
}

app.post('/task',async(req:Request,res:Response)=>{
  try {
    const {title,description,limitDate,creatorUserId} = req.body;
    const date = await formatDate(limitDate)
    await createTask(title,description,date,creatorUserId);

    if(!title || !description || !limitDate || !creatorUserId)
    throw new Error('Todos os campos são obrigatorios.')
    res.status(200).send('Tarefa criada com sucesso')
  } catch (error:any) {
    res.status(400).send({error: error.message})
  }

})

//função e end point para pegar tarefa pelo id

async function getTaskById(id:string): Promise <any> {
    const result = await connection ('TodoListTask').where('id',id).select('*');
    return result [0];
}

app.get('/task/:id', async(req:Request, res:Response)=>{
    try {
        const {id} = req.params;
        const task = await getTaskById(id)
        res.status(200).send(task)
    } catch (error:any) {
        res.send(400).send({error: error.message})
    }
});


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});