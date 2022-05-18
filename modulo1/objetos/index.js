// Aula de Objetos

// Exercícios de interpretação de código:

// 1 - a) Será impressos no console : 
// Matheus Nachtergael
// Virginia Cavendish
// Globo, 14h

// 2 - a) Será impresso no console:

// nome: Juca, idade: 3,raça: SRD
// nome: Juba, idade: 3 , raça: SRD
// nome: Jubo, idade: 3, raça: SRD

 //    b) A sintaxe dos três pontos faz um espelhamento (Spread). Spread é um recurso que permite o acesso de um objeto iterável.


// 3 - a)  Será impresso no console: 

//          false
//          Undefined

//     b) O primeiro console.log deu ''false'' devido ao fato de termos pedido para imprimir o valor de "beckender". O valor está definido pelo booleano false
//        O segundo console.log deu "Undefined" devido ao foto de termo pedido para imprimir o valor de "altura", mas "altura" não foi definido anteriormente.



//Exercícios de escrita de código

// 1 -
// a)

// const pessoa1 = {
//     nome: "Patrick",
//     apelido: ["Pat", "Patroca", "Bob Esponja"]
//}
// }
// let imprimirMsg = pessoa =>  console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}`)

// imprimirMsg(pessoa1)

// b) 
// const novosApelidos = {
//     ...pessoa1,
//     apelido: ["Careca", "Vela" , "Cabeção"]
// }

// imprimirMsg(novosApelidos)

//2 -

// a)

// const pessoa1 = {
//     nome: "Eric",
//     idade: 34,
//     profissao: "Cozinheiro",
// }

// const pessoa2 = {
//     nome: "Rogério",
//     idade: 20,
//     profissao: "Estudante",
// }

// // b)

// let array = pessoa => {
//    console.log([pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]) 
// }

// array(pessoa1)
// array(pessoa2)

// 3 -

// //a) 

// let carrinho = []

// // // b)

// const fruta1 = {
//     nome: "Laranja",
//     disponivel: true,
// }

// const fruta2 = {
//     nome: "Limão",
//     disponivel: false,
// }

// const fruta3 = {
//     nome: "Melão",
//     disponivel: true,
// }

// // c)

// let colocarNoCarrinho = (fruta1, fruta2, fruta3) => carrinho.push(fruta1, fruta2, fruta3)

// colocarNoCarrinho(fruta1, fruta2, fruta3)

// d)
// console.log(carrinho)

// Desafios

// 1) 

// let informações = (nome, idade, profissão) => {
// let p1 = nome = prompt("Qual é o seu nome?")
// let p2 = idade = Number(prompt("Qual a sua idade?"))
// let p3 = profissão = prompt("Qual a sua profissão?")
// console.log(`Nome:${p1}, idade: ${p2}, profissão: ${p3}.`)
// }

// informações()
// console.log(typeof informações)


// 2)

// const filme1 = {
//     nome: "Tempo",
//     ano_de_lançamento: 2021
// }

// const filme2 ={
//     nome: "Hereditário",
//     ano_de_lançamento: 2018
// }


// let avaliarDataFilme = (filme1, filme2) =>{
// let lançado_antes = filme1.ano_de_lançamento < filme2.ano_de_lançamento
// let lançado_junto = filme1.ano_de_lançamento === filme2.ano_de_lançamento
// console.log(`O primeiro filme foi lançado antes do segundo? ${lançado_antes}
// O primeiro filme foi lançado no mesmo ano do segundo? ${lançado_junto}`)
// }

// avaliarDataFilme(filme1, filme2)


// // 3)

// function disponibilidadeInvertida (obj) {
//     obj.disponivel = !obj.disponivel
//     return obj
// }

// console.log(disponibilidadeInvertida(fruta1))
// console.log(disponibilidadeInvertida(fruta2))
// console.log(disponibilidadeInvertida(fruta3))

