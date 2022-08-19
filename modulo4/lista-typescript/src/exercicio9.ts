function fatorialFunction (numero: number): number {
    let fatorial: number = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}


function howManyAnagrams(palavra: string): number {
    const palavraSemRepeticao: string = palavra.split('').sort().join('');
    const fatorial: number = fatorialFunction(palavraSemRepeticao.length);
    return fatorial;
}

console.log(howManyAnagrams(process.argv[2]));