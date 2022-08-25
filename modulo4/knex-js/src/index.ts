import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { connect } from "http2";

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


const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `)

    return result[0]
}


app.get("/actor/:name", async (req: Request, res: Response) => {
    try {
        const name = req.params.name
        
        res.send(await getActorByName(name))
    } catch (error:any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

const countActorByGender = async(gender:string): Promise<any> =>{
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)
    return result[0]
}

app.get("/actor/genders/:gender", async(req:Request,res: Response)=>{
    try {
        const gender = req.params.gender

        res.send(await countActorByGender(gender))
    } catch (error:any) {
        res.status(500).send("Unexpected Error")
    }
})


const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };

  const deleteActor = async(id:string): Promise<any> =>{
    await connection ("Actor")
    .delete()
    .where("id",id)
  }

  const salary = async (gender:string): Promise<any> =>{
    const result = await connection ("Actor")
    .avg("Salary as average")
    .where({gender})

    return result[0].average;
  }


  const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = "${id}"
    `)
      return result[0][0]
  }


  app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      res.send(await getActorById(id))
    } catch (error:any) {
      res.status(500).send("Unexpected error")
    }
  })

  app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActorByGender(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (error:any) {
      res.status(400).send({
        message: error.message,
      });
    }
  });

  app.put("/actor/:id", async (req:Request, res:Response): Promise<void> => {
    try {
        await connection("Actor")
        .update({
            salary: req.body.salary
        }).where({id: req.params.id})

        res.status(200).send({id: req.params.id})

    } catch (error:any) {
        
        res.status(500).send( error.Message)
    }
})

app.delete("/actor/:id", async (req:Request, res:Response): Promise<void> => {
    try{
        await deleteActor(req.params.id);

        res.send("Ator deletado com sucesso!")
    } catch(error:any){
        res.status(500).send(error.Message)
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

