import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateShowInputDTO, IGetAllShowInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}
public createShow = async (req:Request, res: Response) => {
    try {
        const input:ICreateShowInputDTO ={
            token: req.headers.authorization as string,
            band: req.body.band,
            starts_at: req.body.starts_at
        }

        const response = await this.showBusiness.createShow(input);
        
        res.status(200).send(response)
        
    } catch (error:any) {
        if (error instanceof BaseError) {
            return res.status(error.statusCode).send({ message: error.message })
        }
        res.status(500).send({ message: "Erro inesperado ao criar show" })
    }

}

public getAllShows = async (req: Request, res: Response) => {
    try {
        const input:IGetAllShowInputDTO = {
            token: req.headers.authorization as string
        }
        const response = await this.showBusiness.getAllShows(input)
        res.status(200).send(response)

    } catch (error:any) {
        if (error instanceof BaseError) {
            return res.status(error.statusCode).send({ message: error.message })
        }
        res.status(500).send({ message: "Erro inesperado ao tentar pegar lista de shows" })
    }
}
}