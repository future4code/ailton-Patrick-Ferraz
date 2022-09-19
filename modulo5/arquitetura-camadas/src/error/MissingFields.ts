import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
    constructor(){
        super('Todos os devem ser preenchidos',404)
    }
}