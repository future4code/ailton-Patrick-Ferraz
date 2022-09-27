import{UserBusiness} from "../src/business/UserBusiness"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { HashManagerMock } from "../tests/mocks/HashManagerMock";
import { AuthenticatorMock } from "../tests/mocks/AuthenticatorMock";
import { ISignupInputDTO, ILoginInputDTO } from "../src/models/User";

describe("Testeando UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock(),
            )

test("Um token é retornado quando o cadastro é bem-sucedido",async () =>{
    const input: ISignupInputDTO = {
        email: "fulano@gmail.com",
        name: "Fulano",
        password: "fulano123"
    }
    const response = await userBusiness.signup(input)
    expect(response.message).toBe("Cadastro realizado com sucesso")
    expect(response.token).toBe("token-mock-normal")


})

test("Um token é retornado quando o login é bem-sucedido", async () => {
    const input:ILoginInputDTO = { 
        email:"astrodev@gmail.com",
        password:"bananinha"
}
const response = await userBusiness.login(input)
expect(response.message).toBe("Login realizado com sucesso")
expect(response.token).toBe("token-mock-admin")

})

})