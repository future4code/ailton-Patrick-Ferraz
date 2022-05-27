// Aula - Callback e Funções de array

// Exercícios de interpretação de código;

// 1- 
// Esse código ira "mapear" e imprimir todas as propriedades das váriaveis (valor do elemento na estapa do loop, valor do índice daquele elemento e o array original em si) e listar esse elementos um abaixo do outro.
//  Ele iria imprimir algora como: {nome: Amanda Rangel, apelido: Mandi} 0 > (3) [{...}, {...}, {...}]
//                                 {nome: Laís Petra, apelodo: Laura}   1 > (3)[{...}, {...}, {...}]
//                                 {nome: Letícia Chijo, apelodo: Chijo}   2 > (3)[{...}, {...}, {...}]


// 2- Nesso código, ira ser impresso um array com os nomes dos usuários, um ao lado do outros.
// Imprimiria algo com : ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo' ]
// 


// 3-

// O condigo ira imprimir um array novo, com todos os elementos do objeto em que o apelido sejam diferentes de Chijo ( !== "Chijo") em um novo array.
// Será impresso algo como :  (2) [{...}, {...}]
                            // 0: {nome: Amanda Rangel, apelido: Mandi}
                            // 1: {nome: Laís Petra, apelodo: Laura}




// Exercícios de escrita de código

// 1.

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]


// const nomeDosPets = pets.map((pet) =>{
//     return pet.nome
// })


// console.log(nomeDosPets)


// b)

// const apenasRacaSalsicha = pets.filter((pet) =>{
//     return pet.raca ==="Salsicha"
// })

// console.log(apenasRacaSalsicha)

// c) 
// const cupomDesconto10 = pets.filter((pet)=>{
//    if (pet.raca === "Poodle")
//     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`)
// })


// 2- 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a)
// const nomeDosItens = produtos.map((produtos) => {
//     return produtos.nome
// })

// console.log(nomeDosItens)

// b)

// const produtosCom5Desconto = produtos.map((item) =>{ 
//     return {nome: item.nome, preco: item.preco * 0.95}
// })

// console.log(produtosCom5Desconto)


// c)

// const apenasBebidas = produtos.filter((bebida) =>{
//     return bebida.categoria === "Bebidas"
// })

// console.log(apenasBebidas)

// d)

//  const itensYpe = produtos.filter((nome) =>{
//      return nome.nome.includes("Ypê")
//  })

//  console.log(itensYpe)

// e)

// const comprePor = produtos.filter((produto) =>{
//         return produto.nome.includes("Ypê")
        
// }).map((produto) =>{
// console.log(`Compre ${produto.nome} por ${produto.preco}`)
// })


//Desafio 

// 1-

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]

//  a)

// let listaOrdem = pokemons.sort(function (a, b) {
//     if (a.nome > b.nome) {
//       return 1;
//     }
//     if (a.nome < b.nome) {
//       return -1;
//     }
//     return 0;
//   }
//   )

//  console.log(listaOrdem)

// b)

// const tiposPokemon = pokemons.map((pokemon) =>{
//     return pokemon.tipo
// }).filter((tipo, index, array) => {
// return array.indexOf(tipo) === index
// })

// console.log(tiposPokemon)