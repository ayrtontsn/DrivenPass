import { Credential } from "@prisma/client"
import prisma from "../config/database"
import Cryptr from "cryptr"

async function create_credential(credential:Credential, user_id: number) {
    const cryptr = new Cryptr("secretkey")
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

export const credential_repository = {
    create_credential,
    check_credential_byTitle
}