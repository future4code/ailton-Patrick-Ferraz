import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { userRouter } from './router/userRouter'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

//Middleware
//Isso torna a ULR BASE = http://localhost:3003/users
app.use("/users",userRouter)

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

