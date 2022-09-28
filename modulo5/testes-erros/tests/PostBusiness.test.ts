import { PostBusiness } from "../src/business/PostBusiness";
import { BaseError } from "../src/errors/BaseError";
import {
  ICreatePostInputDTO,
  IDeletePostInputDTO,
  IGetPostsInputDTO,
  Post,
} from "../src/models/Post";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { PostDatabaseMock } from "./mocks/PostDatabaseMock";

describe("Testando a PostBusiness", () => {
  const postBusiness = new PostBusiness(
    new PostDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test("Deve retornar uma lista de posts", async () => {
    const input: IGetPostsInputDTO = {
      token: "token-mock-normal",
    };

    const response = await postBusiness.getPosts(input);
    expect(response.posts.length).toBe(3);
    expect(response.posts[0]).toBeInstanceOf(Post);
  });

  test("Deve ser possível criar um novo post", async () => {
    const input: ICreatePostInputDTO = {
      token: "token-mock-normal",
      content: "Teste do mock",
    };

    const response = await postBusiness.createPost(input);

    expect(response.message).toBe("Post criado com sucesso");
    expect(response.post).toBeInstanceOf(Post);
    expect(response.post.getId()).toBe("id-mock");
    expect(response.post.getContent()).toBe("Teste do mock");
    expect(response.post.getLikes()).toBe(0);
    expect(response.post.getUserId()).toBe("id-mock");
  });

  test("Erro quando o 'contet' do CreatePost possui menos de 1 caracter.", async () => {
    expect.assertions(2);

    try {
      const input: ICreatePostInputDTO = {
        token: "token-mock-admin",
        content: "",
      };
      await postBusiness.createPost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Parâmetro 'content' inválido: mínimo de 1 caracteres"
        );
      }
    }
  });

  test("Erro ao passar token errado no CreatePost", async () => {
    expect.assertions(2);

    try {
      const input: ICreatePostInputDTO = {
        token: "teste do token errado",
        content: "Teste do teste",
      };

      await postBusiness.createPost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Credenciais inválidas");
      }
    }
  });

  test("Erro ao passar token errado no GetPosts", async () => {
    expect.assertions(2);

    try {
      const input: IGetPostsInputDTO = {
        token: "Teste do token errado",
      };
      await postBusiness.getPosts(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Credenciais inválidas");
      }
    }
  });

  test("Erro ao tentar deletar um post através de um id que não existe", async () => {
    expect.assertions(2);

    try {
      const input: IDeletePostInputDTO = {
        token: "token-mock-admin",
        postId: "223112321",
      };

      await postBusiness.deletePost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Post não encontrado");
      }
    }
  });

  test("Erro ao tentar deletar um post com um token de usuario normal", async () => {
    expect.assertions(2);

    try {
      const input: IDeletePostInputDTO = {
        token: "token-mock-normal",
        postId: "201",
      };

      await postBusiness.deletePost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(403);
        expect(error.message).toBe("Permissão insuficiente");
      }
    }
  });
});
