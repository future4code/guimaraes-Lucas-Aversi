import app from "./app";
import { postRouter } from "./routes/postRouter";
import { userRouter } from "./routes/userRouter";


/* ____________________________________ENDPOINTS____________________________________ */


// CONSULTAR DOCENTES
app.use("/users", userRouter)
app.use("/posts", postRouter)

