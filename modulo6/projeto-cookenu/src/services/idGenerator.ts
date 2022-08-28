import {v4} from "uuid"
class IdGenerator{
    generatedID = ()=>{
        return v4()

    }
}
export default new IdGenerator()