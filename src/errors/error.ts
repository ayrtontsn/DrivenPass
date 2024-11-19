export function conflict_error(type: string){
    return {
            name: "CONFLICT",
            message: `Esse ${type} já está cadastrado!` 
        }
}

export function error_found(iten: string){
    return {
            name: "NOT FOUND",
            message: `Não existe esse ${iten} cadastrado!`
        }
}

export function password_error(){
    return {
            name: "UNAUTHORIZED",
            message: "Senha errada!" 
        }
}