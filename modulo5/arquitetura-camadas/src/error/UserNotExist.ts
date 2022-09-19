import { BaseError } from "./BaseError";

export class UserNotExist extends BaseError{
    constructor(){
        super('Usuário não existe.',404 )
    }
}