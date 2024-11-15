import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export default function error_handling_middleware(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error.name === "NOT FOUND") return res.status(StatusCodes.NOT_FOUND).send(error.message);
    if (error.name === "CONFLICT") return res.status(StatusCodes.CONFLICT).send(error.message);
    if (error.name === "UNPROCESSABLE ENTITY") return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send(error.message);
    if (error.name === "UNAUTHORIZED") return res.status(StatusCodes.UNAUTHORIZED).send(error.message);
    return res.status(StatusCodes.BAD_REQUEST).send(error.message)
}