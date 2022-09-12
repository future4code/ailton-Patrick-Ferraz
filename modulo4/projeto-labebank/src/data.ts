

export type BankStatement ={
    value:number,
    date:string,
    description:string
}

export type Users ={
    name:string,
    cpf:string,
    bithDate:string,
    balance: number,
    bankStatement: BankStatement[]

}

export const account: Users[] = []