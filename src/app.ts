import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/user/user.route'



// const express = require('express')
const app:Application = express()


app.use(express.json())
app.use(cors())

app.use('/api',userRouter)

app.get('/', (req: Request, res:Response) => {
  res.send('Bocks! Server is running')
})




export default app;