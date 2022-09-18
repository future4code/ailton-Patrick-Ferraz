import app from "./app";
import { UserEndpoint } from "./endpoints/UserEndpoint";

const user = new UserEndpoint()

app.post("/signup",user.signUp)
app.post("/login",user.login)
app.get("/profile",user.profile)