import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export function schemaValidate(schema: Schema ) {
    return (req: Request,res: Response,next: NextFunction) => {
        const validacao = schema.validate(req.body,{abortEarly:false});
        if (validacao.error) throw {
            name: "UNPROCESSABLE ENTITY",
            message: validacao.error.details.map(detail => detail.message)
        }
        next();
    }
}