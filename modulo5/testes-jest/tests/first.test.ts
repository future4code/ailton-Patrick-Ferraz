describe("Exercícios da tarde",() =>{

test("Exercício 0: Testar se o numéro é par.",()=>{
expect(isEven(112)).toBe(true)
})

test("Exercício 1:Verificar se a saída da função retorna em caixa alta.",()=>{
    expect(toUpperCase('bananinha')).toBe('BANANINHA')
})

test("Exercício 2: Verificar se a saida da função retorna um array de string onde cada item é uma letra da palavra original.",()=>{
    expect(toSplit("dev")).toEqual(['d','e','v'])
})

test("Exercício 3:Verificar se a saída da função, que é um número em fortamoto string, retorne um número em formato number.",()=>{
expect(toNumber("50")).toBe(50)
})

test("Exercício 4: Verificar se a saída da função, que recebe uma string, retorna um number representando a quantidade de caracteres da mesma.",()=>{
expect(stringLength("jest")).toBe(4)
})

test("Exercício 5:Verificar se a saída da funções é um número aleatório entre 1 e 10. ",()=>{
    const number = randomNumberBetween1And10()
    expect(number).toBe(number)
})

test("Exercício 6:Verificar se um usuário específico existe em uma lista de usuários.",()=>{
    const user:IUser = {
        id: "3",
        name: "Astrodev",
        age: 50
    }
    expect(users).toContainEqual(user)
})

test("Exercício 7:Verificar a média, arredondada para cima, de uma lista de números positivos.",()=>{
    expect(calcAverage([10,4,7,6])).toBe(7)
})

test("Exercício 8: Verificar a idade atual.",()=>{
    expect(calcAge(2000)).toBe(22)
})

test("Exercício 9:Verificar se o retorno da função volta uma data formada('dd,mm,aaaa')",()=>{
    expect(formatDate('2022/09/26')).toBe('26/09/2022');
})


})

interface IUser {
    id: string,
    name: string,
    age: number
}

const users: IUser[] = [
    {
        id: "1",
        name: "Alice",
        age: 20
    },
    {
        id: "2",
        name: "Bob",
        age: 18
    },
    {
        id: "3",
        name: "Astrodev",
        age: 50
    }
]

const isEven = (number:number)=>{
    if(number % 2 === 0){
        return true
    } else{
        return false
    }
}

const toUpperCase = (string:string):string=>{
return string.toUpperCase()
}

const toSplit = (string:string):string[] =>{
    return string.split("")
}

const toNumber = (string:string):number =>{
    return Number(string)
}

const stringLength = (string:string):number => {
    return string.length
}

const randomNumberBetween1And10 = ():number =>{
    const min = 1
    const max = 10
    const resuLt = Math.floor(Math.random() * (max - min + 1)) + min

    return resuLt
}

const calcAverage = (list:number[]):number =>{
    let totalSum = 0

    for(let n of list) {
        totalSum += n
    }

    const average = Math.ceil(totalSum/ list.length)

    return average
}

const calcAge = (year:number):number =>{
    const currentYear = new Date().getFullYear()
    const age = currentYear - year

    return age
}

const formatDate = (initialDate:string):string =>{
    const date = new Date(initialDate)
    const formattedDate = date.toLocaleDateString()

    return formattedDate
    
}