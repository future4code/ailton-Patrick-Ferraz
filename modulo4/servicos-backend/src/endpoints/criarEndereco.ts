import { Response,Request } from "express";
import axios from "axios"
import { requisicaoCep } from "../services/requesicaoCep";
import { Usuario } from "../types/usuario";
import { inserirUsuario } from "../data/inserirUsuario";


export async function criarEndereco(req:Request,res:Response) {
    try {
        const cep = req.params.cep
        
        if(!cep){
            res.statusCode=404
            throw new Error("Cep não foi passado.")
        }

        
        const consultaCep = await requisicaoCep(cep)
        
  
        if(!consultaCep){
            res.statusCode = 404
            throw new Error (`Não existe cep com o endereço =>${cep}`)
        }
        
        const usuarioCadastro:Usuario ={
            bairro: consultaCep.bairro,
            cidade: consultaCep.localidade,
            estado: consultaCep.uf,
            logradouro: consultaCep.logradouro

        }
       
        await inserirUsuario(usuarioCadastro)

        res.status(200).send("Pessoa cadastrada com sucesso!")
     
    } catch (error:any) {
        res.status(res.statusCode || 500).send({message: error.message || error.sqlMessage})
    }
}