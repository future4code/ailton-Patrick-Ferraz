import { tickets } from "../database/migrations/data"
import { ShowDatabase } from "../database/ShowDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { AuthorizationError } from "../errors/AuthorizationError"
import { ICreateShowInputDTO, ICreateShowOutputDTO, IGetAllShowInputDTO, IGetAllShowOutputDTO, Show } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness { 
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

public createShow = async (input:ICreateShowInputDTO) : Promise <ICreateShowOutputDTO> =>{
    const {token,band,starts_at} = input;

    const payload = this.authenticator.getTokenPayload(token)

    if(!payload){
        throw new AuthenticationError("Token invalido")
    }

    if(payload.role !== USER_ROLES.ADMIN){
        throw new AuthorizationError("Apenas administradores podem criar shows")
    }

    const id = this.idGenerator.generate()//

    const show = new Show(
        id,
        band,
        starts_at,
        )

        await this.showDatabase.createShow(show)

        const response = {
            message: "Show criado com sucesso."
        }

        return response
}

public getAllShows = async (input:IGetAllShowInputDTO) =>{
    const {token} = input

    const payload = this.authenticator.getTokenPayload(token)

    if(!payload){
        throw new AuthenticationError('Token invalido')
    }

    const showsDB = await this.showDatabase.getAllShows()

    const shows = showsDB.map(postDB =>{
        return new Show(
            postDB.id,
            postDB.band,
            postDB.starts_at,
            postDB.tickets
        )
    })

    const response:IGetAllShowOutputDTO ={
        shows
    }

    return response
} 

}