//Exercícios de interpretação de código

/*1-Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa:

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

//Mensagem impressa: a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

//Mensagem impressa: a. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

//Mensagem impressa: c. true

console.log("d. ", typeof resultado)

//Mensagem impressa: d. boolean */

/*2- Seu colega se aproxima de você falando que o código dele não funciona como devia.
//Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

/*Resposta: O erro é que o número digitado no prompt saira em forma de string, não em number.
Dá forma que está, o console trara como mensagem impressa duas string, uma seguida da outra, não uma soma.
Séria necessário transformar os strings dos prompt em numbers para, assim, o resultado impresso ser a soma real.
Além disso, ele teria que mudar o tipo de variável de const para let, visto que o valor da soma é variável*/

/*3- Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

let soma = primeiroNumero + segundoNumero

console.log(soma)


Exercícios de escrita de código 

1. Faça um programa que:
    
    a) Pergunte a idade do usuário
    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

    let idade = Number(prompt("Qual a sua idade?"))
    let idadeAmigos = Number(prompt("Qual a idade do seu melhor amigo/amiga?"))
 
    console.log(idade > idadeAmigos)

    let diferençaIdade = idade - idadeAmigos

    console.log("A diferença de idade é", diferençaIdade)


    2. Faça um programa que:
    
    a) Peça ao usuário que insira um número **par**
    
    b) Imprima na console **o resto da divisão** desse número por 2.
    
    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */

/*let insiraPar = Number(prompt("Insira um número par"))
    let divisãoPor2 = insiraPar % 2

    console.log(divisãoPor2)
    
    Resposta letra c) Sempre que o número digitado é par, resta o número 0
    Respota letra d) Sempre que o número digitado é impar, resta o número 1

    3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas

    let idade = Number(prompt("Qual a sua idade?"))
    console.log("Você tem",  idade, "anos")
    
    
    //a)
    let idadeMeses = idade * 12
console.log("Sua idade em meses é:", idadeMeses, "meses")

    //b)
    let idadeDias = idadeMeses * 30
   console.log("Sua idade em dias é:", idadeDias, "dias")

    //c)
    let idadeHoras = idadeDias * 24
    console.log("Sua idade em horas é:", idadeHoras, "horas")
    
    4.Faça um programa que pergunte ao usuário dois números. 
    Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
    
    O primeiro numero é maior que segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true

    obs: O true ou false vai depender dos números inseridos e do resultado das operações.

let primeiroNumero = Number(prompt("Digite um número"));
let segundoNumero = Number(prompt(" Digite outro número"));

console.log(
  "O primeiro número é maior que o segundo?",
  primeiroNumero > segundoNumero
);
console.log(
  "O primeiro número é igual ao segundo?",
  primeiroNumero === segundoNumero
);

let primerioDivisível = primeiroNumero % segundoNumero;

let resultado1 = primerioDivisível === 0;
let resultado2 = primerioDivisível <= 0;

console.log(
  "O primeiro número é divisível pelo segudo?",
  resultado1 && resultado2
);
console.log("O segundo número é divisível pelo primeiro:", !resultado1);

DESAFIO

1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). 
Abaixo estão duas delas:

*Graus Fahrenheit(°F) para Kelvin(K):

(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

*Graus Celsius(°C) para Graus Fahrenheit (°C):

(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

let Fahrenheit = 77
let Calculo1 = (77 - 32)*(5/9) + 273.15

console.log("Valor de 77° Fahrenhit em Kelvin:", Calculo1, "K") 

b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

let Celsius1 = 80
let Calculo2 = (Celsius1)*(9/5) + 32

console.log("Valor de 80° Celsius em Fahrenheit:", Calculo2, "°F")


c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

let Celsius2 = 30
let Calculo3 = (Celsius2)*(9/5) + 32
let Calculo4 = (Calculo3 - 32)*(5/9) + 273.15

console.log("Valor de 30° Celsius em Fahrenhit:", Calculo3, "°F")
console.log("Valor de 30° Celsius em Kelvins:", Calculo4, "°K")

//d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.

let Celsius2 = Number(prompt("Insira aqui um valor de graus Celsius(°C) que deseja converter"))

let Calculo3 = (Celsius2)*(9/5) + 32
let Calculo4 = (Calculo3 - 32)*(5/9) + 273.15

console.log("Valor de", Celsius2,"graus Celsius convertido em Fahrenhit é", Calculo3, "°F")
console.log("Valor de", Celsius2, "graus Celsius convertido em Kelvins é", Calculo4, "°K")

2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. 
Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

let residência1 = 280 * 0.05

console.log("Serão pagos R$",residência1,"-hora nessa residência" )

//b) Altere o programa para receber mais um valor: a porcentagem de desconto.
Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

let residência1 = 280 * 0.05
let desconto1 = residência1 - 15/100

console.log("Serão pagos, com desconto de 15%, R$",desconto1,"-hora nessa residência" )

3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa.
por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb).
Para representar Distâncias, existem metro (m), pés (ft), milha (mi). 
Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic).
Dada essa introdução, faça o que se pede:

a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg.
    Imprima  a resposta no console da seguinte forma: 
    `20lb equivalem a X kg`

    let libraParaQuilo = 20 / 2.205
    console.log("20lb equivalem a", libraParaQuilo, "kg")


b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg.
   Imprima  a resposta no console da seguinte forma: 
    `10.5oz equivalem a X kg

    let onçaParaQuilo = 10.5 / 35.274
    console.log("10.5oz equivalem a", onçaParaQuilo,"kg")



c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. 
   Imprima  a resposta no console da seguinte forma: 
    `100mi equivalem a X m`

    let milhaParaMetro = 100 * 1609
    console.log("100mi equivalem a", milhaParaMetro, "m")


d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m.
   Imprima  a resposta no console da seguinte forma: 
    `50ft equivalem a X m`

    let pésParaMetro = 50 /  3.281
    console.log("50ft equivalem a", pésParaMetro, "m")


/*e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro.
   Imprima  a resposta no console da seguinte forma: 
    `103.56gal equivalem a X l`

    let galãoParaLitro = 103.56 * 3.806
    console.log("103.56gal equivalem a", galãoParaLitro,"l")

f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro.
   Imprima  a resposta no console da seguinte forma: 
    `450 xic equivalem a X l`

    let xicParaLitro = 450 / 3.52
    console.log("450 xic equivalem a", xicParaLitro, "l")

    g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter

    //Xícaras para litros
    let xicParalitro = Number(prompt("Insira aqui um valor de xícaras para conversão em litros."))
    let resultado1 = xicParalitro / 3.52

    console.log("O valor de", xicParalitro, "xícaras convertidas em litros é", resultado1, "l.")

    //Pés para metros
    let pésParaMetros = Number(prompt("Insira aqui um valor de pés para conversão em metros."))
    let resultado2 = pésParaMetros / 3.291
    
    console.log("O valor de", pésParaMetros,"pés convetidos em metros é", resultado2, "m.")
    
    //Libras para quilograma
    let lbParaM = Number(prompt("Insira aqui um valor de libras para conversão em quilogramas"))
    let resultado3 = lbParaM / 2.205

    console.log("O valor de", lbParaM, "libras convertidos em quilogramas é", resultado3, "kg.")*/