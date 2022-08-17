import express,{ Express, Request, Response } from "express";
import cors from "cors";
import {produtos, Produtos} from "./data"

const app:Express = express();
app.use(express.json());
app.use(cors());

//exercício 1:

app.get("/teste",(req:Request,res:Response)=>{
    console.log("API está funcionando")
})

//exercício 3:

// app.post("/novoProduto" ,(req:Request, res:Response)=>{

//     const produto: Produtos = req.body;

//     produto.id = Number(Math.random()*100).toFixed(0).toString();
//     produtos.push(produto); 
//     res.send(produtos)
// })

//exercício 4:

app.get("/todosOsProdutos",(req:Request, res:Response)=>{
    res.send(produtos)
})

app.listen(3003, () =>{
    console.log("Server is running in http://localhost:3003")
})

//exercício 5:

// app.put("/editarProduto/:id", (req:Request, res:Response)=>{
//     const id = req.params.id;
//     const produto = produtos.find( p =>p.id === id);
//     if(!produto){
//         res.status(404).send("Produto não encontrado")
//         return
//     }
//     const modificarProduto: Produtos = req.body;
//     produto.price = modificarProduto.price;
//     res.send(produtos)
    
// })

//exercício 6:

app.delete("/deletarProduto/:id", (req,res)=>{
    const id = req.params.id;
    const produtosIndex = produtos.findIndex(p => p.id === id);
    if(produtosIndex === -1) {
        res.status(404).send("Product not found");
        return;
    }
    produtos.splice(produtosIndex, 1);
    res.send(produtos);
}
)

//exercício 7:


app.post("/novoProduto" ,(req:Request, res:Response)=>{

    if(!req.body.name || !req.body.price) {
        res.status(400).send("Nenhum parametro encontrado")
        return
    }
    if(typeof req.body.name !== "string"){
        res.status(400).send("Nome invalido: O nome não é uma string")
        return
    }
    if(typeof req.body.price !== "number"){
        res.status(400).send("Preço invalido: O valor deve ser um número")
        return
    }
    if (req.body.price <= 0) {
        res.status(400).send("Preço invalido: O valor deve ser maior que 0");
        return;
      } else {
        const produto: Produtos = req.body;
        produto.id = Number(Math.random()*100).toFixed(0).toString();
        produtos.push(produto); 
        res.send(produtos)
      }
    });

//exercício 8:

app.put("/editarProduto/:id", (req:Request, res:Response)=>{

    const id = req.params.id;
    const produto = produtos.find( p =>p.id === id)

    if(!req.body.price){
        res.status(400).send("Parametro não encontrado")
    }
    if(typeof req.body.price !== "number"){
        res.status(400).send("Preço invalido: O valor deve ser um número")
    }
    if(req.body.price <= 0) {
        res.status(400).send("Preço invalido: O valor deve ser maior que 0")
    } else {
        
        const modificarProduto: Produtos = req.body;
        produto.price = modificarProduto.price;
        res.send(produto)
    }

})