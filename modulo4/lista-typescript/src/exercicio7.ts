type Estoque = {
    nome: string;
    quantidade: number;
    valorUnitario: string | number;
};

const produtos: Estoque[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];

function ajustaEstoque(arrayEstoque: Estoque[]): Estoque[] {
    const arrayAjustado: Estoque[] = [];
    for (let i = 0; i < arrayEstoque.length; i++) {
        const item: Estoque = {
            nome: arrayEstoque[i].nome,
            quantidade: arrayEstoque[i].quantidade,
            valorUnitario: Number(arrayEstoque[i].valorUnitario).toFixed(2).replace('.', ',')
        };
        arrayAjustado.push(item);
    }
    return arrayAjustado.sort((a, b) => a.quantidade - b.quantidade);

    }

console.log(ajustaEstoque(produtos));