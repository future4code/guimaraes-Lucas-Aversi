import app from "./app";
import { userRouter } from "./routes/userRouter";
import {walkRouter} from "./routes/walkRouter"


/* ____________________________________ENDPOINTS____________________________________ */


// CONSULTAR USUÁRIOS
app.use("/users", userRouter)
app.use("/walks", walkRouter)





