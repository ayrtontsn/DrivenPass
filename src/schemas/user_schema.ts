import { User } from "@prisma/client"
import joi from "joi"

export const phone_schema = joi.object<User>({
    email: joi.string().email().required(),
    name: joi.string().min(3).required(),
    password: joi.string().min(6).required()
})