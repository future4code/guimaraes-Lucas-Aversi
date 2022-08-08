import app from "./app";
import { userRouter } from "./routes/userRouter";


/* ____________________________________ENDPOINTS____________________________________ */


// CONSULTAR DOCENTES
app.use("/users", userRouter)

