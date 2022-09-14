import {v4} from "uuid";

class IdGenerator{
    generateId(): string{
        return v4();
    }
}