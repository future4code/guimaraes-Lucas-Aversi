import * as bcrypt from "bcryptjs"

class HashManager {
    generatedHash = async(password:string):Promise<string>=>{
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const result = await bcrypt.hash(password, salt)
        return result

    }

    compareHash = async (password:string, hash:string): Promise <boolean>=>{
        return bcrypt.compare(password,hash)
    }
}
export default new HashManager()