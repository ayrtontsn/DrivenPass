import { User } from "@prisma/client"
import joi from "joi"

export const signUp_schema = joi.object<User>({
    email: joi.string().email().required(),
    name: joi.string().min(3).required(),
    password: joi.string().min(6).required()
})

export const signIn_schema = joi.object<User>({
    email: joi.string().required(),
    password: joi.string().required()
})