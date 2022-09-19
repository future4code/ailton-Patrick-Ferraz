import { BaseError } from "./BaseError";

export class PasswordLenght extends BaseError{
    constructor(){
        super('A senha deve conter mais de 6 caracteres.',406)
    }
}