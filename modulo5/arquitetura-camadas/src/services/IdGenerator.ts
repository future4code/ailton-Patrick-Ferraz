import {v4} from "uuid"

class IdGenerator{
    public idGenerator(){
        return v4()
    }
}
export default IdGenerator