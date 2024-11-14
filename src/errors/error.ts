export function email_error(){
    return {
            name: "CONFLICT",
            message: `Esse email já está cadastrado!` 
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