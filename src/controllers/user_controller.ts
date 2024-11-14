import { Request, Response } from "express"
import { get_user_service, post_user_service } from "../services/user_service"
import { StatusCodes } from "http-status-codes"

export async function post_user_controller(req: Request, res: Response) {
    const user = req.body
    const create_user = await post_user_service(user)

    res.status(StatusCodes.CREATED).send(create_user)
}
export async function get_user_controller(req: Request, res: Response) {
    const sign_in = req.body
    const token = await get_user_service(sign_in)

    res.status(StatusCodes.OK).send(token)
}