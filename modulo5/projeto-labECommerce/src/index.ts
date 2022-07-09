import { app } from "./app";
import {connection} from "./data/connection"
import { Request, Response } from "express"
import { getAllUsers} from "./endpoints/getAllUsers";
import { createNewUser } from "./endpoints/createNewUser";

app.get("/users", getAllUsers)
app.post("/users", createNewUser)