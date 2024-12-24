//req and res manages

import { Request, Response } from "express";
import { userService } from "./user.service";



const createUser = async (req:Request , res:Response) =>{

    try{
        const payload = req.body

        const result = await userService.createuser(payload)
    
        res.json({
            massages:'User registered successful',
            status:true,
            data: result,
        })

    }catch(error){
        res.json({
            "success": false,
            "message": "Validation error",
            "statusCode": 400,
            "stack": "error stack",
            error
        })
    }
 

}

const loginUser = async (req:Request , res:Response) =>{

    try{
        const payload = req.body

        const result = await userService.loginuser(payload)
    
        res.json({
            massages:'login successful',
            status:true,
            data: result,
        })

    }catch(error){
        res.json({
            "success": false,
            "message": "Validation error",
            "statusCode": 400,
            "stack": "error stack",
            error
        })
    }
 

}

const blockUser = async (req:Request , res:Response) =>{
        

    try{
        const {userId} = req.params
         const body = req.body
        //  console.log(userId)
        
        const result = await userService.adminblock(userId, body)
    
        res.json({
            massages:'User blocked successfully',
            status:true,
            data: result,
        })

    }catch(error){
        res.json({
            "success": false,
            "message": "Validation error",
            "statusCode": 400,
            "stack": "error stack",
            error
        })
    }
 

}

export const  userController = {
    createUser,
    loginUser,
    blockUser
}