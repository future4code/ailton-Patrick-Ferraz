import { BaseError } from "./BaseError";

export class NameLenght extends BaseError{
    constructor(){
        super('O nome deve conter mais de 3 caracteres.',406)
    }
}