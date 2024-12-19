
import user from "./user.model"

const createuser = async (payload:any)=>{
    const result = await user.create(payload)
    return result
}

export const userService ={
    createuser
}