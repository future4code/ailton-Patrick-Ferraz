import { BaseError } from "./BaseError";

export class EmailAlreadyExist extends BaseError{
    constructor(){
        super('Email já cadastrado', 409)
    }
}