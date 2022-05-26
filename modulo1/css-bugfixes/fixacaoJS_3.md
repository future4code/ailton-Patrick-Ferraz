```javascript
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
    let mediaFinal = null
    mediaFinal = (2 * p1 + 3 * p2 + 1 * ex) / (2 + 3 + 1)
    if (mediaFinal >= 9){
      return "A"
    } else if (mediaFinal < 9 && mediaFinal >= 7.5 ){
      return "B"
    } else if (mediaFinal < 7.5 && mediaFinal >= 6){
      return "C"
    } else (mediaFinal < 6)
      return "D"
 }
 ```