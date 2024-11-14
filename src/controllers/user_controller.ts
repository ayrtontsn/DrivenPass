import { Request, Response } from "express"
import { post_user_service } from "../services/user_service"
import { StatusCodes } from "http-status-codes"

export async function post_user_controller(req: Request, res: Response) {
    const user = req.body
    const create_user = await post_user_service(user)

    res.status(StatusCodes.CREATED).send(create_user)
}