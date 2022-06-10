``` javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
let quantidade = 0
for(numero of arrayDeNumeros){
  if(numero === numeroEscolhido){
    quantidade ++
  }
}
if(quantidade === 0){
  return `Número não encontrado`
} else{
  return `O número ${numeroEscolhido} aparece ${quantidade}x`
}
}
```