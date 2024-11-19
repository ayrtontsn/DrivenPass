import { User } from "@prisma/client";
import { user_repositoy } from "../repositories/user_repository";
import { conflict_error, error_found, password_error } from "../errors/error";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { credential_repository } from "../repositories/credential_repository";

export async function post_user_service(user:User) {
    const check_user = await user_repositoy.check_user(user.email)
    if(check_user) throw conflict_error("email")
    const create_result = await user_repositoy.create_user(user)
    return create_result
}

export async function get_user_service(user:User) {
    const check_user = await user_repositoy.check_user(user.email)    

    if(!check_user) throw error_found("email")
    if(!bcrypt.compareSync(user.password,check_user.password)) throw password_error()

    delete check_user.password

    const secretkey = process.env.JWT_SECRET;
    const configtoken = { expiresIn: 60*60*24 }; //1hora
    const token = jwt.sign(check_user,secretkey,configtoken)

    return token
}

export async function delete_user_service(user:User) {

    const delete_credentials = await credential_repository.delete_credential_user(user.id)
    const delete_user = await user_repositoy.delete_user(user.email)

    return delete_user
}