import { Credential } from "@prisma/client";
import Joi from "joi";

export const credential_schema = Joi.object<Credential>({
    title: Joi.string().min(3).required(),
    url: Joi.string().domain().min(3).required(),
    username: Joi.string().required(),
    password: Joi.string().required()
})