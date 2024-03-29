import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import dotenv from "dotenv"
import { userRouter } from './router/userRouter';
import { postRouter } from './router/postRouter';

dotenv.config()

export const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/users",userRouter)
app.use("/posts",postRouter)



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});