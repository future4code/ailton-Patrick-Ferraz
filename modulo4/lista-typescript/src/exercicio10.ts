function validarCPF(cpf: string): boolean {
    let cpfSemPontos = cpf.replace(/\./g, '');
    let cpfSemHifen = cpfSemPontos.replace(/-/g, '');

    let cpfArray = cpfSemHifen.split('');

    let soma = 0;

    for (let i = 0; i < cpfArray.length; i++) {
        soma += Number(cpfArray[i]) * (10 - i);
    }

    let resto = soma % 11;

    if (resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != Number(cpfArray[9])) {
        return false;
    }

    soma = 0;

    for (let i = 0; i < cpfArray.length - 1; i++) {
        soma += Number(cpfArray[i]) * (11 - i);
    }

    resto = soma % 11;

    if (resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != Number(cpfArray[10])) {
        return false;
    }

    return true;
}

console.log(validarCPF('009.888.340-50'));