import app from "./controller/app"
import { userRouter } from "./routes/userRouter"


app.use('/user/', userRouter)
