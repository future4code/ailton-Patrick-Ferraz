function checaRenovacaoRG(anoAtual: number, anoNascimento:number, anoEmissao:number ) {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? "passou dos 5 anos, precisa renovar" : "ainda não passou os 5 anos, não precisa renovar"
       
      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? "passou dos 10 anos, precisa renovar" : "ainda não passou os 10 anos, não precisa renovar"
       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? "passou dos 15 anos, precisa renovar" : "ainda não passou os 15 anos, não precisa renovar"
       
       }else {
           return "error"
       }
   }
   

    console.log(checaRenovacaoRG(2020, 2000, 2020))