import { BaseError } from "./BaseError";

export class EmailNotRegistered extends BaseError{
constructor(){
    super('Email não cadastrado na aplicação.', 404)
}
}