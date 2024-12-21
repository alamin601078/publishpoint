

import { IBlog } from "./blog.interface"
import blogs from "./blog.model"

const  serviceblogs = async (payload:any)=>{
    const result = await blogs.create(payload)
    return result
}

const getBlogs = async () => {
    const result = await blogs.find()
    return result
}

const updateblog = async (id: string, data: IBlog) => {
    const result = await blogs.findByIdAndUpdate(id, data, {
      new: true,
    })
    return result
}

const deleteBlog = async (id: string) => {
    const result = await blogs.findByIdAndDelete(id)
    return result
  }
  

export const blogsService ={
    serviceblogs,
    updateblog,
    deleteBlog,
    getBlogs
}