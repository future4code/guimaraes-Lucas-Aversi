import {app} from "./app"
import {userRouter} from "./routes/userRouter"

app.use("/user", userRouter)

