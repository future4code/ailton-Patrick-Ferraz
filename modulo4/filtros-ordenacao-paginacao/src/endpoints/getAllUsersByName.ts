import { Request, Response } from "express";
import { app } from "../app";
import { connection } from "../data/connection";


export default async function selectAllUsers(): Promise<any> {
  const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `);

  return result[0];
}

export const getAllUsersByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await selectAllUsers();
    const name = req.query.name as string;

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    } else if (!name) {
      res.statusCode = 400;
      throw new Error("Name is required");
    }

    res
      .status(200)
      .send(users.filter((user: { name: string }) => user.name === name));
  } catch (error: any) {
    console.log(error);
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};