enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string,
    ano: number,
    genero: GENERO,
    pontuacao?: number
}

function organizarFilme(nome: string, ano: number, genero: GENERO, pontuacao?: number): Filme {
    return {nome, ano, genero, pontuacao};
}

console.log(organizarFilme("Hereditario", 2018, GENERO.TERROR, 87)); 