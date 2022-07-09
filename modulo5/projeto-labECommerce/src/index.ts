import { app } from "./app";
import {connection} from "./data/connection"
import { Request, Response } from "express"
import { getAllUsers} from "./endpoints/getAllUsers";
import { createNewUser } from "./endpoints/createNewUser";
import { createNewProduct } from "./endpoints/createNewProduct";

app.get("/users", getAllUsers)
app.post("/users", createNewUser)
app.post("/products", createNewProduct)