import * as bcrypt from "bcrypt"

class HashManager { 

    generateHash = async (pass: string) :Promise<string> => {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const result = await bcrypt.hash(pass, salt)

        return result
    }

    compareHash = async (pass: string, hash: string) :Promise<boolean> => {
        return bcrypt.compare(pass, hash)
    }
}

export default new HashManager() 