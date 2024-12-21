//req and res manages

import { Request, Response } from "express";
import { blogsService } from "./blog.service";
// import { userService } from "./user.service";



const blogs = async (req:Request , res:Response) =>{

    try{
        const payload = req.body

        const result = await blogsService.serviceblogs(payload)
        res.json({
            "success": true,
            "message": "Blog created successfully",
            "statusCode": 201,
            "data": {
              "_id": "string",
              "title": "string",
              "content": "string",
              "author":  "details" 
            }
        })

    }catch(error){
        res.json({
            "success": false,
            "message": "blogs error",
            "statusCode": 400,
            "stack": "error stack",
            error
        })
    }
 

}

const updateblog = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const body = req.body
      const result = await blogsService.updateblog(id, body)
  
      res.send({
        success: true,
        message: 'Blog updated successfully',
        result,
      })
    } catch (error) {
      res.send({
        success: false,
        message: 'Something went wrong',
        error,
      })
    }
}

const deleteBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await blogsService.deleteBlog(id)

    res.send({
      "success": true,
      "message": "Blog deleted successfully",
      "statusCode": 200
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}

const getBlog = async (req: Request, res: Response) => {
  try {

    const result = await blogsService.getBlogs()

    res.send({
      "success": true,
      "message": "Blog get successfully",
      "statusCode": 200
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}



export const  blogController = {
    blogs,
    updateblog,
    deleteBlog,
    getBlog
}