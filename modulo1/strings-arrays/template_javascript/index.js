// Aula - Strings e Arrays

//Exercícios de interpretação de código


// 1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

//  let array
//  console.log('a. ', array)
//  Será impresso: a. undefined

//   array = null
//   console.log('b. ', array)
//   Será impresso: b. null

//   array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//   console.log('c. ', array.length)
//   Será impresso: c. 11

//   let i = 0
//   console.log('d. ', array[i])
//   Será impresso: 3

//   array[i+1] = 19
//   console.log('e. ', array)
//   Será impresso: [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 
//   const valor = array[i+6]
//   console.log('f. ', valor)  
//   Será impresso: 9 



// 2.Leia o código abaixo com atenção 
    
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

// Será impresso: SUBI NUM ÔNIBUS EM MIRROCOS 27


//Exercícios de escrita de código

// 1.Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:

// "O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!"

// let nomeDoUsuario = prompt("Qual o seu nome?")
// let emailDoUsuario = prompt("Qual o seu e-mail?")
// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// 2.Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
// let arrayComidas = ["Sushi", "Pizza", "Lasanha", "Sanduíche", "Pastel"]

// a) Imprima no console o array completo
    // console.log(arrayComidas)
// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
  
//  console.log(`Essas são as minhas comidas preferidas: 
// - ${arrayComidas[0]}
// - ${arrayComidas[1]}
// - ${arrayComidas[2]}
// - ${arrayComidas[3]}
// - ${arrayComidas[4]}`)


// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
 
// const comidaUsuario = prompt("Qual sua comida preferida?")
// console.log(`Essas são as minhas comidas preferidas: 
// - ${arrayComidas[0]}
// - ${comidaUsuario}
// - ${arrayComidas[2]}
// - ${arrayComidas[3]}
// - ${arrayComidas[4]}`)

// 3. Faça um programa, seguindo os passos:
    
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

// listaDeTarefas = null
    
// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// let p1 = prompt("Digite aqui uma tarefa que você precise realizar")
// let p2 = prompt("Digite aqui outra tarefa que você precisa realizar")
// let p3 = prompt("Digite aqui mais uma tarefa que você precise realizar")

// let arraylista = [p1,p2,p3]


// // c) Imprima o array no console

// // console.log(arraylista)
    
// // d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

// let p4 = prompt(`Digite o índice de uma tarefa que já foi feita, onde:
// 0 - ${p1} 
// 1 - ${p2}  
// 2 - ${p3} `)



// // e) Remova da lista o item de índice que o usuário escolheu.


// arraylista.splice(p4,1)


// // f) Imprima o array no console

// console.log(arraylista)

//Desafio

// 1- Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

// const frase = prompt("Digite aqui uma frase")

// const array1 = frase.split(" ")
// console.log(array1)

// 2- Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array.

// const array1 = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// let index = array1.indexOf("Abacaxi")
// let index2 = array1.length

// console.log(`A palavra Abacaxi se encontra no índice ${index} e o array apresenta ${index2} elementos.`)
