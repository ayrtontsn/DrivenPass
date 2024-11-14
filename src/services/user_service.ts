import { User } from "@prisma/client";
import { user_repositoy } from "../repositories/user_repository";
import { email_error, email_signIn, password_error } from "../errors/error";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export async function post_user_service(user:User) {
    const check_user = await user_repositoy.check_user(user.email)
    if(check_user) throw email_error()
    const create_result = await user_repositoy.create_user(user)
    return create_result
}

export async function get_user_service(user:User) {
    const check_user = await user_repositoy.check_user(user.email)    

    if(!check_user) throw email_signIn()
    if(!bcrypt.compareSync(user.password,check_user.password)) throw password_error()

    delete check_user.password

    const secretkey = process.env.JWT_SECRET;
    const configtoken = { expiresIn: 60*60 }; //1hora
    const token = jwt.sign(check_user,secretkey,configtoken)

    return token
}