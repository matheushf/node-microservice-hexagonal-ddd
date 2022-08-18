import express, { Request, response, Response } from "express";

const app = express();

app.use(express.json());

app.listen(3000);
