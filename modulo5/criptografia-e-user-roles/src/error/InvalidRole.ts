import { BaseError } from "./BaseError";

export class InvalidRole extends BaseError{
    constructor() {
        super(`Invalid role`,401);
}
}