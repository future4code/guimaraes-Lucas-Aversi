import {AuthenticationData} from "../model/authenticationData"
import * as jwt from "jsonwebtoken"

class Authenticator{
    generateToken = (payload:AuthenticationData)=>{
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_EXPIRES_IN}
        )
        console.log("token do autenticator",token)
        return token
        
    }

    getTokenData = (token:string):AuthenticationData=>{
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        
        const result:AuthenticationData = {
            id:payload.id,
            role:payload.role

        }
        console.log("result do autenticator", result)
        return result
    }
}

export default new Authenticator()