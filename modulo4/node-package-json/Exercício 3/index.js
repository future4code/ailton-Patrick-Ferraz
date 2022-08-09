const listaTarefas = [
    "Comprar pão",
    "Arrumar cama",
    "Jogar lixo fora"
];

const novaTarefa = process.argv[2]
listaTarefas.push(novaTarefa)
console.log(listaTarefas)