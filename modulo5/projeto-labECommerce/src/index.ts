import { app } from "./app";
import {connection} from "./data/connection"
import { Request, Response } from "express"
import { getAllUsers} from "./endpoints/getAllUsers";

app.get("/users", getAllUsers)