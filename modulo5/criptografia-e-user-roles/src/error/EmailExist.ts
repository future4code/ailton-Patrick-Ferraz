import { BaseError } from "./BaseError"

export class EmailAlreadyExist extends BaseError{
    constructor(){
        super("O email já existe",401)
    }
}