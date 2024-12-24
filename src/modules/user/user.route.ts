
import { Router } from "express";
import { userController } from "./user.controller";




const userRouter = Router()

userRouter.post('/auth/register', userController.createUser)
userRouter.post('/auth/login', userController.loginUser)
userRouter.patch('/auth/login', userController.loginUser)
userRouter.patch('/admin/users/:userId/block', userController.blockUser)

export default userRouter

