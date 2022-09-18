import {v4} from "uuid";

class GenerateId {

    generateId(): string{
	return v4();
    }
}

export default GenerateId