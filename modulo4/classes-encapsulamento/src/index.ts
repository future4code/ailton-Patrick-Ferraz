// exercício 1

//a) Construtores de classe são muito semelhantes a funções. Podemos adicionar paramêtros como anotações de tipos, valores padrões e sobrecargas;

//b) Apensa uma vez.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }


  //c) Através do método público chamado getters e passando o nome da propriedade, Ex: getCpf() { return this.cpf;}

  //Exercício 2

//   type Transaction = {
//     description: string,
//     value: number,
//     date: string
 
// }


class Transaction {
private description: string;
private value:number;
private date:string;

constructor(description: string, value:number, date:string) {
    this.description;
    this.value;
    this.date;
}

public getDescription(){
    return this.description;
}

public getValue(){
    return this.value;
}

public getDate(){ 
    return this.date;
}}

//Exercício 3

class Bank {
    private accounts: UserAccount[] = []

constructor (accounts: UserAccount[]) {
    this.accounts = accounts;
}
}