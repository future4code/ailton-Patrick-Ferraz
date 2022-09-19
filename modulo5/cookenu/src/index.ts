import  app  from "./app";
import { UserEndpoint } from "./endpoints/User";


const userEndpoint = new UserEndpoint()

app.get('/user/profile',userEndpoint.GetProfile)
app.get('/user/:id', userEndpoint.GetAnotherProfile)
app.post("/singup",userEndpoint.SingUp)
app.post("/login", userEndpoint.Login)

app.post('/recipe')