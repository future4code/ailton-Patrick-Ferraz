import { Request, Response } from "express";
import { app } from "../app";
import { connection } from "../data/connection";

// Exercício 3: Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez usando offset e limit, e permita que o usuário possa passar a página que deseja ver. O número da página deve ser passado por **query params**.

export async function selectAllUsers3(): Promise<any> {
  const result = await connection.raw(`
         SELECT id, name, email, type
            FROM aula48_exercicio
            ORDER BY email;
    `);

  return result[0];
}

export const getFiveUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await selectAllUsers3();
    const page = req.query.page as any;

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    } else if (!page) {
      res.statusCode = 400;
      throw new Error("Page is required");
    }

    res.status(200).send(users.slice((page - 1) * 5, page * 5));
  } catch (error: any) {
    console.log(error);
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};