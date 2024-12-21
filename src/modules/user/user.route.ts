
import { Router } from "express";
import { userController } from "./user.controller";




const userRouter = Router()

userRouter.post('/auth/register', userController.createUser)
userRouter.post('/auth/login', userController.loginUser)

export default userRouter

