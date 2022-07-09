import { app } from "./app";
import {connection} from "./data/connection"
import { Request, Response } from "express"
import { getAllUsers} from "./endpoints/getAllUsers";
import { createNewUser } from "./endpoints/createNewUser";
import { createNewProduct } from "./endpoints/createNewProduct";
import { getAllProducts } from "./endpoints/getAllProducts";
import { createNewPurchase } from "./endpoints/createNewPurchase";
import { purchasesByUser } from "./endpoints/getPurchaseById";

app.get("/products", getAllProducts )
app.get("/users", getAllUsers)
app.get("/users/:user_id/purchases", purchasesByUser) 

app.post("/users", createNewUser)
app.post("/products", createNewProduct)
app.post("/purchases", createNewPurchase)

