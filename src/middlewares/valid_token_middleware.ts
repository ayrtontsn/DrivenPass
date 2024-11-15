import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export function validate_token(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization;
        const secretkey = process.env.JWT_SECRET

        const user_data = jwt.verify(token, secretkey);
        res.locals.user = user_data

        next()
}