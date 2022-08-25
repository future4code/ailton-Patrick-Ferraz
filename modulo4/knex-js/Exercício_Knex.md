### Exercício 1

a) O raw nos dá uma resposta crua dos dados de uma tabela de acordo com o comando que escrevemos dentro do templante string.

b)
```
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
```

c)
```
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
```

### Exercício 2

a)
```
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };
```

b)
```
  const deleteActor = async(id:string): Promise<any> =>{
    await connection ("Actor")
    .delete()
    .where("id",id)
  }
```

c)
```
 const salary = async (gender:string): Promise<any> =>{
    const result = await connection ("Actor")
    .avg("Salary as average")
    .where({gender})

    return result[0].average;
  }
```

### Exercício 3

a) 
```
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
```

b)
```
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
```

### Exercício 4

a)
```
app.put("/actor/:id", async (req:Request, res:Response): Promise<void> => {
    try {
        await connection("Actor")
        .update({
            salary: req.body.salary
        }).where({id: req.params.id})

        res.status(200).send({id: req.params.id})

    } catch (error:any) {
        
        res.status(500).send(error.sqlMesssage || error.Message)
    }
})
```

b)
```
app.delete("/actor/:id", async (req:Request, res:Response): Promise<void> => {
    try{
        await deleteActor(req.params.id);

        res.send("Ator deletado com sucesso!")
    } catch(err:any){
        res.status(500).send(err.sqlMesssage || err.Message)
    }
})
```