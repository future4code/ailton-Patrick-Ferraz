import { BaseError } from "./BaseError";

export class Incorrect extends BaseError{
constructor(){
    super('Email e/ou senha incorretos.',401)
}
}