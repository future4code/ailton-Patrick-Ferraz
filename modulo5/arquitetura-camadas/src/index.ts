import { app } from "./controller/app"
import { UserController } from "./controller/UserController"


const userController = new UserController


app.post("/singup",userController.singup)
app.post("/login",userController.login)