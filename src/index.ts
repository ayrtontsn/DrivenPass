import express, { Request, Response } from "express";
import "express-async-errors"
import cors from "cors";

import dotenv from "dotenv"
import user_router from "./routers/user_router";
import error_handling_middleware from "./middlewares/error_handler_middleware";
import { StatusCodes } from "http-status-codes";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send("I'm ok!");
  });

app.use(user_router)

app.use(error_handling_middleware)

const porta = process.env.PORT || 5000
app.listen(porta,()=>{console.log(`Servidor rodando na porta: ${porta}`)})
