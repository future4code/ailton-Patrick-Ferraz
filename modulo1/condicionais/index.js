/// Aula - Condicionais

// Exercícios de interpretação de código

// 1 - 
// a)  O código verifica se o número é par ou impar. Ele realiza um teste que consiste em verificar o resto de uma divisão de um número determinado pelo usuário por 2. A partir desse resultado, podemos definir se um número é par ou impar. Números pares trazem o resultado 0, enquanto números impares trazem o resultado 1. Após o resultado, a condicional if vai verificar se o número gerado pelo resultado é igual a 0. Tendo o resultado, o código ira imprimir se o número inserido passou ou não pelo teste;


// b) Ele imprimira "Passou no teste" para todos os números pares que forem colocado pelo usuário;

// c) Ele imprimira "Não passou no teste" para todos os números impares que forem colocados pelo usuário;

// 2 - 

// a)Servem para verificar o preço de uma determinanda fruta escolhida pelo usuário;

// b) O preço da fruta Maçã é R$ 2.25

// c) Seria impresso: O preço da fruta Pêra é R$ 5.


// 3 -

// a)Está gerando um prompt que perguntara para o usuário um número. Observação para o comando NUMBER, que está antes do prompt para transformar a resposta do usuário (prompt) de string para número.

// b) Com o número 10 sendo escolhido, sera impresso: Esse número passou no teste" e um erro. No caso do -10, só sera impresso o erro;

// c) Sim, acontecera um erro. O problema é que a constante mensagem está dentro de um escopo filho, não podendo ser acessado pelo console.log do escopo pai.


// Exercícios de escrita de código.


// 1 - 

// let idadeUser = Number(prompt("Digite aqui sua idade para saber se você pode dirigir."))

// const confirmarIdade = (numero) => {
//     if(numero >= 18){
//         console.log("Você pode dirigir.")
//     } else {
//         console.log("Você não pode dirigir.")
//     }

// }
// confirmarIdade(idadeUser)

// 2 -

// let turnoDia = prompt(`Qual turno do dia você estuda?
// Escolha uma das opcões abaixo:
// M = Matutino
// V = Vespertino
// N = Noturno`)

// let mensagemDeBoasVinda = (mensagem) =>{
//     if (mensagem === "M"){
//     console.log("Bom dia!")
// } else if (mensagem === "V"){
//     console.log("Boa tarde!")
// } else if (mensagem === "N"){
//     console.log("Boa noite")
// } else {
// }
// }

// mensagemDeBoasVinda(turnoDia)

// 3 -
// let turnoDia = prompt(`Qual turno do dia você estuda?
// Escolha uma das opcões abaixo:
// M = Matutino
// V = Vespertino
// N = Noturno`)

// let mensagemTurno = (parametro) =>{
// switch (parametro){
// case `M`:
//     console.log(`Bom dia!`)
//     break
// case `V`:
//     console.log(`Boa tarde!`)
//     break
// case `N`:
//     console.log(`Boa noite!`)
//     break
//     default:
//         console.log("Digite um dos 3 caracteres pedidos.")
//         break
// }
// }

// mensagemTurno(turnoDia)


// 4 - 

// let generoDeFilmes = prompt(`Qual o gênero de filme você ira assistir?
// Escolha um número de nossa lista:
// 1 - Fantasia
// 2 - Terror
// 3 - Ação
// 4 - Drama
// 5 - Comedia`)

// let preçoIngresso = Number(prompt(("Digite o valor do preço do ingresso que pretende gastar.")))

// let trueOfFalse = (genero1, valor1) =>{
//    const verdadeiro = genero1 === "1"
//    const verdadeiro1 = valor1 < 15
//     return verdadeiro && verdadeiro1
// }

// let respostas1 = trueOfFalse(generoDeFilmes,preçoIngresso)

// let assistirFilme = (paramentro) =>{
//     if (paramentro === true){
//     console.log("Bom filme!")
//     } else {
//         console.log("Escolha outro filme :( ")
//     }
// }

// assistirFilme(respostas1)

// Desafios

// 1- 

// let generoDeFilmes = prompt(`Qual o gênero de filme você ira assistir?
// Escolha um número de nossa lista:
// 1 - Fantasia
// 2 - Terror
// 3 - Ação
// 4 - Drama
// 5 - Comedia`)

// let preçoIngresso = Number(prompt(("Digite o valor do preço do ingresso que pretende gastar.")))

// let trueOfFalse = (genero1, valor1) =>{
//    const verdadeiro = genero1 === "1"
//    const verdadeiro1 = valor1 < 15
//     return verdadeiro && verdadeiro1
// }

// let respostas1 = trueOfFalse(generoDeFilmes,preçoIngresso)

// let lanchinho = prompt('Qual snack você vai comprar?')

// let assistirFilme = (paramentro) =>{
//     if (paramentro === true){
//     console.log(`Bom filme!
// Aproveite o seu ${lanchinho}!`)
//     } else {
//         console.log("Escolha outro filme :( ")
//     }
// }

// assistirFilme(respostas1)


// 2 - 

// const informaçõesDoCliente = {
// // // nome1: prompt("Insira seu nome completo."),
// // tipo1: prompt(`Escolha o tipo de jogo que deseja assistir:
// // Digite IN para jogo internacional;
// // Digite DO para jogo doméstico.`),
// etapa1: prompt(`Escolha a etapa do jogo que deseja assistir:
// Digite SF para jogo de semi-final;
// Digite DT para jogo de decisão de terceiro lugar;
// Digite FI para joog de final.`),
// // // categoria1: Number(prompt("Selecione uma categoria, de 1 a 4.")),
// // // quantidade1: Number(prompt("Digite aqui a quantidade de ingressos desejada.")),
// }

// imprimir tudo com:
// Valor de cada ingresso
// Valor total (valor de cada ingresso * info4)
// Valor de jogos internacionais ( * 4.10) = Representar em dolar
     
// valorUnitario = (num1 * num2)

//  nacionalOuNão = (tipo) => {
//     if (tipo.tipo1 === "DO"){
//         console.log("Nacional")
//     }else {
//         console.log(" Internacional")
//     }
// }


// etapa = (etapa) => {
//     if (etapa.etapa1 === "SF"){
//         console.log("Semi-final")
//     } else if (etapa.etapa1 === "DT"){
//         console.log("Decisão de terceiro lugar")
//     } else if (etapa.etapa1 === "FI"){
//         console.log("Final")
//     }else {
//         console.log("Erro")
//     }
// //     }
 
// ValorDoIngresso = (etapa, categoria) =>{

// }

// ---Dados da compra--- 
// Nome do cliente:  Soter Padua 
// Tipo do jogo:  Nacional 
// Etapa do jogo:  Final 
// Categoria:  1 
// Quantidade de Ingressos:  10 ingressos 
// ---Valores--- 
// Valor do ingresso:  R$ 1980s
// Valor total:  R$ 19800
