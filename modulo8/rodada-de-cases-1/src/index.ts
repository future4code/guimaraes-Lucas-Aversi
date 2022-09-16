import app from "./app";
import { userRouter } from "./routes/userRouter";


/* ____________________________________ENDPOINTS____________________________________ */


// CONSULTAR USUÁRIOS
app.use("/users", userRouter)




