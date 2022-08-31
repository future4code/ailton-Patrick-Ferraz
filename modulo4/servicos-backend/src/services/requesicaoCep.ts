import axios from "axios"


export async function requisicaoCep(cep:string){
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return result.data
    } catch (error:any) {
        console.log(error.response)
        return null
    }

}