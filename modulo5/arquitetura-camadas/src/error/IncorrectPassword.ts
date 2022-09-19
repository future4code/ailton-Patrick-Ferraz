import { BaseError } from "./BaseError";

export class IncorrectPassword extends BaseError{
    constructor(){
        super('A senha está incorreta.', 409)
    }
}