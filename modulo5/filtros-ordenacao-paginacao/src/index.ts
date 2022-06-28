import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";

app.get("/recipes", getAllRecipes)