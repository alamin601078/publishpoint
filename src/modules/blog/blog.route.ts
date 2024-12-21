
import { Router } from "express";
import { blogController } from "./blog.controller";
// import { userController } from "./user.controller";



const blogRouter = Router()

blogRouter.post('/blogs', blogController.blogs)
blogRouter.get('/blogs', blogController.getBlog)
blogRouter.patch('/blogs/:id', blogController.updateblog)
blogRouter.delete('/blogs/:id', blogController.deleteBlog)

export default blogRouter


