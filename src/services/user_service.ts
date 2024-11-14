import { User } from "@prisma/client";
import { user_repositoy } from "../repositories/user_repository";
import { email_error } from "../errors/error";

export async function post_user_service(user:User) {
    const check_user = await user_repositoy.check_user(user.email)
    if(check_user) throw email_error()
    const create_result = await user_repositoy.create_user(user)
    return create_result
}