import app from "./app";
import { competitionRouter } from "./routes/competitionRouter";
import { dartRouter } from "./routes/dartRouter";
import { raceRouter } from "./routes/raceRouter";


/* ____________________________________ENDPOINTS____________________________________ */


// CONSULTAR USUÁRIOS
app.use("/competition", competitionRouter,raceRouter,dartRouter)





