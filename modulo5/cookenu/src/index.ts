import  app  from "./app";
import { GetProfile } from "./endpoints/GetProfile";
import { Login } from "./endpoints/Login";
import { SingUp } from "./endpoints/SingUp";

app.get('/user/profile',GetProfile)
app.post("/singup",SingUp)
app.post("/login", Login)