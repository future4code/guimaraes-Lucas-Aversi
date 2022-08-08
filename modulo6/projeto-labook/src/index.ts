import app from "./app";
import express, { Response, Request } from "express";
import { buscarUser } from "./endpoints/buscarUser";


/* ____________________________________ENDPOINTS____________________________________ */


// CONSULTAR DOCENTES
app.get('/users', buscarUser)
