import { BaseError } from "./BaseError";

export class AuthorizationError extends BaseError{
    constructor(){
        super('Esse endpoint exige uma autorização a ser passada nos headers.',422)
    }
}