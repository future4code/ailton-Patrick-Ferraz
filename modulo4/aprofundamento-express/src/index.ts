import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//exercício 1:
app.get("/ping", (req,res) =>{
    res.send("Pong")
})

//exercício 2:

type Afazeres ={

    id:number;
    title:string;
    completed:boolean
}

//exercício 3:

const afazeres:Afazeres[] =[
    {
        id:1,
        title:"Ir para academia",
        completed:true,
    },
    {
        id:2,
        title:"Assistir aula",
        completed:true,
    },
    {
        id:3,
        title:"Fazer exercício de express",
        completed:false,
    },
    {
        id:4,
        title:"Fazer carinho no gato",
        completed:true,
    }
]

//exercício 4:

app.get("/todos", (req, res) => {
    const { completed } = req.query;

    if (completed) {
        const filteredTodos = afazeres.filter(todo => todo.completed);
        res.send(filteredTodos);
    } else {
        const filteredTodos = afazeres.filter(todo => !todo.completed);
        res.send(filteredTodos);
    }
});

///Modificar o endpoint para todo?completed=true ou /todo?uncompleted

//exercício 5:

app.post("/todos/novoAfazer",(req,res) =>{
    const {id, title, completed} = req.body;

    const novoAfazer: Afazeres = {
        id:afazeres.length + 1,
        title:title,
        completed:completed
    }
    afazeres.push(novoAfazer);

    res.send(afazeres)
})

//exercício 6:

app.put("/todos/:id", (req, res) => {

    const { id } = req.params;
    const { completed } = req.body;

    const afazeresIndex = afazeres.findIndex(todo => todo.id === +id);

    if (afazeresIndex < 0) {
        res.status(400).send("Todo not found");
        return;
    }

    afazeres[afazeresIndex].completed = completed;

    res.send(afazeres);
}
);

//exercício 7:

app.delete("/todos/:id", (req, res) => {
    const { id } = req.params;

    const afazeresIndex = afazeres.findIndex(todo => todo.id === +id);

    if (afazeresIndex < 0) {
        res.status(400).send("Não encontrado");
        return;
    }

    afazeres.splice(afazeresIndex, 1);

    res.send(afazeres);
}
);

//exercício 8:

app.get("/user/:id/todos", (req, res) => {
    const { id } = req.params;

    const filtrarAfazeres = afazeres.filter(todo => todo.id === +id);

    res.send(filtrarAfazeres);
}
);

app.listen(3003, () =>{
    console.log("Server is running in http://localhost:3003")
})