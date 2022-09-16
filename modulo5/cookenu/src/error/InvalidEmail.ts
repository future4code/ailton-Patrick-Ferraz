import { BaseError } from "./BaseError";

export class InvalidEmail extends BaseError{
    constructor(){
        super("Não autorizado.",401)
    }
}