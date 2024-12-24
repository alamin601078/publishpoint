import blogs from "../blog/blog.model"
import user from "./user.model"



const createuser = async (payload:{ email: string, password: string,name:string, inBlocked:true})=>{
    const result = await user.create(payload)
    return result
}

const loginuser = async (payload:{ email: string, password: string })=>{
    const result = await user.findOne(payload)
    return result
}

const adminblock = async (userId: string) => {

    const result = await user.findByIdAndUpdate(userId, {
     
      inBlocked: true,
    })
    // console.log(result)
    return result
}

const adminDeleteBlog = async (id: string) => {
    const result = await blogs.findByIdAndDelete(id)
    return result 
}

export const userService ={
    createuser,
    loginuser,
    adminblock,
    adminDeleteBlog
}