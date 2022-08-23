import app from "./app";
import { friendshipRouter } from "./routes/friendshipRouter";
import { postRouter } from "./routes/postRouter";
import { userRouter } from "./routes/userRouter";


/* ____________________________________ENDPOINTS____________________________________ */


// CONSULTAR DOCENTES
app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/friendship", friendshipRouter)


