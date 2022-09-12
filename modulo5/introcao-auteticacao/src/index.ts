//exercício 1

//a) Utilizar string permite utilizar uma gama maior de caracteres durante a geração de ids;

//b) Feito no arquivo GenerateId dentro da pasta services

//Exercício 2

//a) O codigo está connectando com o banco de dados, através da const connection, e criando um usuario, com id, email e password (const createUser) e inserindo essas informações na tabela userTableName

//b) 

// CREATE TABLE User(
//     id VARCHAR(255) PRIMARY KEY,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL
//     );

//c) Type User criado na pasta model; função de adicionar usuário no arquivo UserDatabase, na pasta data.

//Exercício 3

//a)Estamos dizendo para o typescript que o  process.env.JWT_KEY é realmente uma string. Fazemos isso por que o  process.env.JWT_KEY também pode vir undefined
//b)Na pasta services

//Exercício 4
import app from "./app";
import { UserEndpoint } from "./endpoints/User";

const user = new UserEndpoint

app.post('/user/signup', user.createUser)
app.post('/user/login', user.login)



//exercío 7 

//a) Significa que o process.env.JWT_KEY pode ser de qualquer tipo. Precisamos disso ali por que o token vem com letras e numeros;
    