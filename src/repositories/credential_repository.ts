import { Credential } from "@prisma/client"
import prisma from "../config/database"
import Cryptr from "cryptr"
import { date } from "joi"

async function create_credential(credential:Credential, user_id: number) {
    const cryptr = new Cryptr(process.env.JWT_SECRET)
    const create_result = await prisma.credential.create({
        data:{
            title: credential.title,
            url: credential.url,
            username: credential.username,
            password: cryptr.encrypt(credential.password),
            userId: user_id
        }
    })
    return create_result
}

async function check_credential_byTitle(title:string, user_id: number) {
    const credential = await prisma.credential.findFirst({
        where: {
            title,
            userId: user_id
        }
    })
    return credential
}

async function check_credential_byId(id: number) {
    const credential = await prisma.credential.findFirst({
        where: {
            id
        }
    })
    return credential
}

async function check_all_credential(user_id: number) {
    const credential = await prisma.credential.findMany({
        where: {
            userId: user_id
        }
    })
    return credential
}

async function update_credential(id: number,credential: Credential) {
    const cryptr = new Cryptr(process.env.JWT_SECRET)
    const update_result = await prisma.credential.update({
        where:{
            id
        },
        data:{
            title: credential.title,
            url: credential.url,
            username: credential.username,
            password: cryptr.encrypt(credential.password),
            userId: credential.userId
        }
    })
    return update_result
}

async function delete_credential(id: number) {
    const delete_result = await prisma.credential.delete({
        where:{
            id
        }
    })
    return delete_result
}

export const credential_repository = {
    create_credential,
    check_credential_byTitle,
    check_all_credential,
    check_credential_byId,
    update_credential,
    delete_credential
}