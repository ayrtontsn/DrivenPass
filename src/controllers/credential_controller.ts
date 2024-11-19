import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { delete_credential_id_service, get_credential_id_service, get_credential_service, post_credential_service, update_credential_id_service } from "../services/credential_service"

export async function post_credential_controller(req: Request, res: Response) {
    const credential = req.body
    const user = res.locals.user;
    const create_credential = await post_credential_service(credential, user)

    res.status(StatusCodes.CREATED).send(create_credential)
}

export async function get_credential_controller(req: Request, res: Response) {
    const user = res.locals.user;
    const get_credential = await get_credential_service(user)

    res.status(StatusCodes.OK).send(get_credential)
}

export async function get_credential_id_controller(req: Request, res: Response) {
    const { id } = req.params;
    const user = res.locals.user;
    const get_credential = await get_credential_id_service(user, Number(id))

    res.status(StatusCodes.OK).send(get_credential)
}

export async function update_credential_id_controller(req: Request, res: Response) {
    const { id } = req.params;
    const user = res.locals.user;
    const credential = req.body
    const update_credential = await update_credential_id_service(user, Number(id),credential)

    res.status(StatusCodes.NO_CONTENT).send(update_credential)
}

export async function delete_credential_id_controller(req: Request, res: Response) {
    const { id } = req.params;
    const user = res.locals.user;
    const delete_credential = await delete_credential_id_service(user, Number(id))

    res.status(StatusCodes.NO_CONTENT).send(delete_credential)
}