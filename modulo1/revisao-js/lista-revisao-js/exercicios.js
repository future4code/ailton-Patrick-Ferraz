// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function(a, b){return a-b})
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
let numerosPares = array.filter((numeros) => {
return numeros % 2 === 0
})
return numerosPares
}

// EXERCÍCIO 05//
function retornaNumerosParesElevadosADois(array) {
        let numerosPares = array.filter((numeros) => {
        return numeros % 2 === 0
        })
        return numerosPares.map((numeros) => {
            return numeros ** 2
        })

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

let maior = -Infinity
for(let i = 0; i < array.length; i++){
     if(array[i] > maior){
         maior = array[i]
     } 
 } return maior
}
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
     return ("Escaleno")
    } else {
    return ("Isósceles")
    }
}


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

  
    
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return{...pessoa,
    nome:"ANÔNIMO"
}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoaAutorizada = pessoas.filter((inf) => {
        return inf.idade > 14 && inf.idade < 60 && inf.altura > 1.5
        })
        return pessoaAutorizada
    }

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoaNaoAutorizada = pessoas.filter((inf) => {
        return inf.idade <= 14 || inf.idade > 60 || inf.altura < 1.5
    })
    return pessoaNaoAutorizada
    }

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

 
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}

