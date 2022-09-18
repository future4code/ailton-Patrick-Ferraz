import { Usuario } from "../types/usuario";
import { connection } from "./connection";


export async function inserirUsuario (usuarioCadastro:Usuario) {
    const{logradouro,bairro,cidade,estado} = usuarioCadastro
    await connection().insert({
        logradouro,
        bairro,
        cidade,
        estado,
    }).into("usarioCEP")
}
