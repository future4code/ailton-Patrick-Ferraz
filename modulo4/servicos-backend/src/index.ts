import { app } from "./app";
import { criarEndereco } from "./endpoints/criarEndereco";


app.post('/cadastro-cep/:cep',criarEndereco)