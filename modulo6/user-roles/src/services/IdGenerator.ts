import {v4} from "uuid"

class IdGenerator{
    const generatedID = ()=>{
        return v4()

    }
}

export default new IdGenerator()