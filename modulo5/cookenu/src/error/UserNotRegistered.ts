import { BaseError } from "./BaseError";

export class UserNotRegistered extends BaseError{
    constructor(){
        super('Usuário não cadastrado.',409);
    }
}