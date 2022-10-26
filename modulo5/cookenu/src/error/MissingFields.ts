import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
    constructor(){
        super("Todos os campos devem ser passados",404);
    }
}