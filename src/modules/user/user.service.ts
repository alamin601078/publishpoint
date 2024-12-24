import user from "./user.model"



const createuser = async (payload:{ email: string, password: string,name:string, inBlocked:true})=>{
    const result = await user.create(payload)
    return result
}

const loginuser = async (payload:{ email: string, password: string })=>{
    const result = await user.findOne(payload)
    return result
}

const adminblock = async (userId: string, data: any) => {

    const result = await user.findByIdAndUpdate(userId, {
     
      inBlocked: true,
    })
    // console.log(result)
    return result
}

export const userService ={
    createuser,
    loginuser,
    adminblock
}