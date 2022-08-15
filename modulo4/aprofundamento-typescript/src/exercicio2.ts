//a) Entradas: numeros (Array<number>) Saídas: estatisticas (object)

function obterEstatisticas(numeros: number[]) {
    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas

}
 //b) numeros (number[]), numerosOrdenados (number[]), soma (number), estatisticas (object)

 //c)  type amostraDados = {
//     numeros: number[]
//     obterEstatisticas: () => object
// }