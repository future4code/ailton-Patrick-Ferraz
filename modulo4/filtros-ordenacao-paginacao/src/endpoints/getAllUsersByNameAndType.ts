import { Request, Response } from "express";
import { app } from "../app";
import { connection } from "../data/connection";

//  Exercício 2: Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user. A ordenação padrão deve ser **crescente**, e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por **email**.

export async function selectAllUsers2(): Promise<any> {
  const result = await connection.raw(`
         SELECT id, name, email, type
            FROM aula48_exercicio
            ORDER BY email;
    `);

  return result[0];
}

export const getAllUsersByNameAndType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await selectAllUsers2();
    const name = req.query.name as string;
    const type = req.query.type as string;

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }
    if (!name && !type) {
      res.status(200).send(users);
    } else if (!name) {
      res
        .status(200)
        .send(users.filter((user: { type: string }) => user.type === type));
    } else if (!type) {
      res
        .status(200)
        .send(users.filter((user: { name: string }) => user.name === name));
    }
  } catch (error: any) {
    console.log(error);
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};