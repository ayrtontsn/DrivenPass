import { Credential, User } from "@prisma/client"
import { conflict_error, error_found } from "../errors/error"
import { credential_repository } from "../repositories/credential_repository"
import { user_repositoy } from "../repositories/user_repository"
import Cryptr from "cryptr"

export async function post_credential_service(credential:Credential, user: User) {
    const user_data = await user_repositoy.check_user(user.email)
    const check_credential = await credential_repository.check_credential_byTitle(credential.title, user_data.id)
    if(check_credential) throw conflict_error("título")

    const create_result = await credential_repository.create_credential(credential, user_data.id)
    return create_result
}

export async function get_credential_service(user: User) {
    const cryptr = new Cryptr(process.env.JWT_SECRET)
    const user_data = await user_repositoy.check_user(user.email)
    const all_credential = await credential_repository.check_all_credential(user_data.id)
    all_credential.map(credential => {
        credential.password = cryptr.decrypt(credential.password)
    })

    return all_credential
}

export async function get_credential_id_service(user: User, id: number) {
    
    const all_credential = await get_credential_service(user)
    const credential = all_credential.filter(credential => credential.id===id)
    if(credential.length === 0) throw error_found("id")
    return credential[0]
}

export async function update_credential_id_service(user: User, id: number, credential: Credential) {
    
    const check_id_credential = await get_credential_id_service(user, id)
    const check_credential = await credential_repository.check_credential_byTitle(credential.title, check_id_credential.userId)
    if(check_credential) throw conflict_error("título")
    const result_credential = await credential_repository.update_credential(id,credential)

    return result_credential
}