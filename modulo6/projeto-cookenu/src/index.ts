import app from "./app";
import { recipeRouter } from "./routes/recipeRouter";
import { userRouter } from "./routes/userRouter";


/* ____________________________________ENDPOINTS____________________________________ */


// CONSULTAR USUÁRIOS
app.use("/users", userRouter)
app.use("/recipes", recipeRouter)




