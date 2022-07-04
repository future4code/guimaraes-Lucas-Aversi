import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import {getUsers, getUserByType} from './endpoints/getAllUsers'

app.get("/recipes", getAllRecipes)
app.get('/users', getUsers)
app.get("/users/:type", getUserByType)