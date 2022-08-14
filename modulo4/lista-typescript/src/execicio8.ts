function renovaCarteira (dataNascimento: string, dataEmissao: string): boolean {
    const dataAtual: Date = new Date();
    const dataNascimentoTimestamp: number = new Date(dataNascimento).getTime();
    const dataEmissaoTimestamp: number = new Date(dataEmissao).getTime();
    const dataAtualTimestamp: number = dataAtual.getTime();
    const idade: number = Math.floor((dataAtualTimestamp - dataNascimentoTimestamp) / (1000 * 60 * 60 * 24 * 365));
    const idadeEmissao: number = Math.floor((dataAtualTimestamp - dataEmissaoTimestamp) / (1000 * 60 * 60 * 24 * 365));
    const idadeRenovacao: number = idade % 5 === 0 ? idade : idade % 5;
    const idadeRenovacaoEmissao: number = idadeEmissao % 5 === 0 ? idadeEmissao : idadeEmissao % 5;
    return idadeRenovacao < 20 || idadeRenovacao === 20 || idadeRenovacaoEmissao < 20 || idadeRenovacaoEmissao === 20 ? true : false;
}

console.log(renovaCarteira(process.argv[2], process.argv[3]));