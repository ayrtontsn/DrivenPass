import { User } from "@prisma/client";
import prisma from "../config/database";
import bcrypt from "bcrypt"

async function create_user(user:User) {
    const create_result = await prisma.user.create({
        data:{
            email: user.email,
            name: user.name,
            password: bcrypt.hashSync(user.password, 10)
        }
    })
    return create_result
}

async function check_user(email:string) {
    const user = await prisma.user.findFirst({
        where: {email}
    })
    return user
}

async function delete_user(email:string) {
    const user = await prisma.user.delete({
        where: {email}
    })
    return user
}

export const user_repositoy = {
    create_user,
    check_user,
    delete_user
}