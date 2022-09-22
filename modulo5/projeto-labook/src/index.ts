import { app } from './app'
import { pingRouter } from './router/pingRouter'
import { postRouter } from './router/postRouter'
import { userRouter } from './router/userRouter'


app.use("/ping", pingRouter)
app.use("/users", userRouter)
app.use("/posts", postRouter)