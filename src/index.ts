import express, { Request, Response } from "express";
import "express-async-errors"
import cors from "cors";

import dotenv from "dotenv"

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("I'm ok!");
  });

const porta = process.env.PORT || 5000
app.listen(porta,()=>{console.log(`Servidor rodando na porta: ${porta}`)})
