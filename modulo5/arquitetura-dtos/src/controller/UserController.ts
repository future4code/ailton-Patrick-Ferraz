import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { GetUserInput, UserEditDTO, UserInputDTO, UserLoginInputDTO, UserTokenDTO } from "../models/User";

export class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const input: UserInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.signup(input)

            res.status(201).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: UserLoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.login(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public getUsers = async (req: Request, res: Response) => {
        try {
            const input: GetUserInput = {
                token: req.headers.authorization,
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: Number(req.query.limit),
                page: req.query.page as string
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.getUsers(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const input: UserTokenDTO= {
                token: req.headers.authorization,
                idToDelete: req.params.id
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.deleteUser(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public editUser = async (req: Request, res: Response) => {
        try {
            const input: UserEditDTO = {
                token: req.headers.authorization,
                idToEdit: req.params.id,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.editUser(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}