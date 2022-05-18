// Aula - Laços

// Exercícios de interpretação de código

// 1- O código esta fazendo um laço "for" para roda uma condição de continuação atralada a um número que é incrementado; a ação repetida desse codigo ira adicionar a variavel valor: o valor testado nos loops mais o valor testado atual (+=i)
// O console ira imprimir : 10
                            
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// 2 -
// a) Serão impressos todos os números, de dentro do array "lista", que são maiores que 18 ([19,21,23,25,27,30]);

// b)Sim, é possível. Através da estrutura: 

    // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    // for(let numero1 of lista) {
    // console.log(lista.indexOf(numero1))

// 3- Sera impresso: 
//  *
//  **
//  ***
//  ****


// Exercícios de escrita de código

// // // // 1-
// let quantosBixinhos = +prompt("Quantos bixinhos você tem?")

// // a)

//   if (quantosBixinhos === 0){
//       console.log("Que pena! Você pode adotar um pet")
// // b)   
//       } else {
//           for (let i = 0; i < quantosBixinhos; i++) {
// // c)
//             console.log(prompt("Qual é o nome do seu pet?"))
//           }
//       }


// // 2 -

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// // a) 

// const valoresOriginais = (arr) => {
// for(let num of arr){
//     console.log(num)
// }
// }
// valoresOriginais(array)

// // b) 

// const divididoPor10 = (arr) =>{
//     for(let num of arr)
//     console.log(num / 10)
// }

// divididoPor10(array)

// c)

// d) d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.

// e)