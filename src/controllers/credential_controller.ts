import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { post_credential_service } from "../services/credential_service"

export async function post_credential_controller(req: Request, res: Response) {
    const credential = req.body
    const user = res.locals.user;
    const create_credential = await post_credential_service(credential, user)

    res.status(StatusCodes.CREATED).send(create_credential)
}