import { BaseError } from "./BaseError";

export class PasswordLength extends BaseError{
    constructor(){
        super('O password deve conter,no mínimo,6 caracteres.',406)
    }
}