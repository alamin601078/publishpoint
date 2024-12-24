import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './modules/user/user.route'
import blogRouter from './modules/blog/blog.route'




// const express = require('express')
const app:Application = express()


app.use(express.json())
app.use(cors())

app.use('/api',userRouter)
app.use('/api',blogRouter)
// app.use('/api',admi)

app.get('/', (req: Request, res:Response) => {
  res.send('Bocks! Server is running')
})




export default app;