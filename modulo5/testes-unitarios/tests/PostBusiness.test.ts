import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PostDatabaseMock } from "./mocks/PostDatabaseMock"
import { PostBusiness } from "../src/business/PostBusiness"
import { ICreatePostInputDTO, IGetPostsInputDTO,Post  } from "../src/models/Post"


describe("Testando a PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

test("Deve ser possível criar um post",async()=>{
    const input:ICreatePostInputDTO ={
        token: "token-mock-normal",
        content: "Testando mock"
    }

    const response = await postBusiness.createPost(input)

    expect(response.message).toBe("Post criado com sucesso")
})

test("Deve retornar uma lista de posts", async () => {
    const input:IGetPostsInputDTO = {
        token:"token-mock-normal"
    } 
 
    const response = await postBusiness.getPosts(input)

    expect(response.posts[0]).toBeInstanceOf(Post)
})

})