export function conflict_error(type: string){
    return {
            name: "CONFLICT",
            message: `Esse ${type} já está cadastrado!` 
        }
}

export function email_signIn(){
    return {
            name: "NOT FOUND",
            message: "Não existe esse email cadastrado!"
        }
}

export function password_error(){
    return {
            name: "UNAUTHORIZED",
            message: "Senha errada!" 
        }
}