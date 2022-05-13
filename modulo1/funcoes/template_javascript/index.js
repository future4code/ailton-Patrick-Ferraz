//Aula - Funções:


//Exercícios de interpretação de código:
//1-
//a)Ira ser impresso, um abaixo do outro, 10 e 50, respectivamente;
//b) Não ira ser impresso nada no console;

//2-
//a) Essa função ira transformar o texto inteiro digitado pelo usuário para letras minússculas (.toLowerCase) e vai buscar um elemento(.includes), que no caso será a string "cenoura", e nos retornar um booleano;
//b)i. Será impresso: eu gosto de cenoura; true;
//  ii.Será impresso: cenoura é bom para vista; false;
//  iii. Será impresso: cenouras crescem na terra; false;


//Exercícios de escrita de código:

//1-
//a)

// const semParametro = () => {
    
// }

// console.log("Eu sou Patrick, tenho 29 anos, moro em Caruaru e sou estudante.")

// //b)

// const informações = (nome, idade, endereço, profissão) =>{
//     let mensagem = `Eu sou ${nome}, tenho ${idade}, moro em ${endereço} e sou ${profissão}`
//     return mensagem
// }

// let nome = "Patrick"
// let idade = 29
// let endereço = "Avenida Madrid,205"
// let profissão = "estudante de programação"

// let resultado = informações(nome, idade, endereço , profissão)

// console.log(resultado)

// //2- 

//a)
// let numero1 = 40
// let numero2 = 60

// soma1 = (num1, num2) =>{
//     let soma  = num1 + num2
//     return soma

// }

// const resultadoSoma = soma1(numero1, numero2)
// console.log(resultadoSoma)

//b)

//  maiorOuIgual = (num1,num2) => {
//   let numeros = num1 >= num2
//   return numeros

//  }

//  const resultado2 = maiorOuIgual(numero1,numero2)
// console.log(resultado2)

//c)

// parOuImpar = (num1) => {    
//     let resto = num1 % 2
//     let par = resto === 0

//     return par
// }

// const resultado3 = parOuImpar(numero1)
// console.log(resultado3)

//d) 


// const mensagem = mensagemFormatada = (mensagem1) => {
        
//     const tamanho = mensagem1.length
//     const maisculo = mensagem1.toUpperCase( )
//     const resposta = [`O tamanho dá string é ${tamanho}`, maisculo]

//     return resposta
//     // return mensagem1.toUpperCase( )
// }

// const mensagem1 = "eu to ficando doido"

// const mensagem2 = mensagemFormatada(mensagem1)
// console.log(mensagem2)

// 3- 

// let funçãoSoma = (num1, num2) => {

//     let soma = num1 + num2
//     return soma

// }

// let funçãoSubtração = (num1, num2) =>{
    
//     let subtração = num1 - num2
//     return subtração

// }

// let funçãoMultiplicação = (num1, num2) => {
    
//     let multiplicação = num1 * num2
//     return multiplicação
// }

// let funçãoDivisão = (num1, num2) => {

//     let divisão = num1 / num2
//     return divisão
// }

// let numero1 = Number(prompt("Insira um número"))
// let numero2 = Number(prompt("Insira outro número"))

// let soma1 = funçãoSoma(numero1,numero2)
// let subtração1 = funçãoSubtração(numero1,numero2)
// let multiplicação1 = funçãoMultiplicação(numero1,numero2)
// let divisão1 = funçãoDivisão (numero1,numero2)


// console.log(`
// Números inseridos: ${numero1} e ${numero2}
// Soma: ${soma1}
// Diferença: ${subtração1}
// Multiplicação: ${multiplicação1}
// Divisão: ${divisão1}`)


