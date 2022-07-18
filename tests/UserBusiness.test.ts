// import  {UserBusiness}  from "../src/business/UserBusiness"
// import { UserDatabase } from "../src/data/UserDatabase"
// import { UserInputDTO, UserRole } from "../src/model/User"
// import { HashManager } from "../src/services/HashManager"
// import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
// import { HashManagerMock } from "./mocks/HashManagerMock"
// import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
// import  UserDatabaseMock from "./mocks/UserDatabaseMock"



// const userBusinessMock = new UserBusiness(
//     new AuthenticatorMock(),
//     new IdGeneratorMock(),
//     new HashManager(),
//     new UserDatabaseMock
// )

// describe("Testando o signup", () => {
//     test("Erro de nome", async () => {
//         try {

//             const input: UserInputDTO = {
//                 name: "",
//                 email: "Hunter@dev.com",
//                 password: "123456",
//                 role: UserRole.NORMAL
//             }

//             await userBusinessMock.createUser(input)
//         } catch(error: any) {
//             expect(error.message).toEqual("Missing input")
//             expect(error.statusCode).toBe(422)
//         } finally {
//             expect.assertions(2)
//         }
//     })

//     test("Erro de email", async () => {
//         try {

//             const input: UserInputDTO = {
//                 name: "Hunter",
//                 email: "Hunterdev.com",
//                 password: "123456",
//                 role: UserRole.NORMAL
//             }

//             await userBusinessMock.createUser(input)
//         } catch(error: any) {
//             expect(error.message).toEqual("Invalid email")
//             expect(error.statusCode).toBe(422)
//         } finally {
//             expect.assertions(2)
//         }
//     })

//     test("Error de senha", async () => {
//         try {

//             const input: UserInputDTO = {
//                 name: "Hunter",
//                 email: "Hunter@dev.com",
//                 password: "",
//                 role: UserRole.NORMAL
//             }

//             await userBusinessMock.createUser(input)
//         } catch(error: any) {
//             expect(error.message).toEqual("Invalid password")
//             expect(error.statusCode).toBe(422)
//         } finally {
//             expect.assertions(2)
//         }
//     })

//     test("Sucesso no cadastro", async () => {
//         try {

//             const input: UserInputDTO = {
//                 name: "Hunter",
//                 email: "Hunter@dev.com",
//                 password: "123456",
//                 role: UserRole.NORMAL
//             }

//              await expect(userBusinessMock.createUser(input)).resolves.not.toThrow()
            
//         } catch(error: any) {
//             console.log(error)
//         } finally {
//             expect.assertions(1)
//         }
//     })
// })


// describe("Testando o login", () => {
//     test("Error de email", async () => {
//         try {
//             await userBusinessMock.login("batata@dev.com", "123456")
//         } catch(error: any) {
//             // console.log(error)
//             expect(error.message).toEqual("Invalid credentials")
//             expect(error.statusCode).toBe(401)
//         } finally {
//             expect.assertions(2)
//         }
//     })

//     test("Error de senha", async () => {
//         try {
//             await userBusinessMock.login("Hunter@dev.com", "123457")
//         } catch(error: any) {
//             // console.log(error)
//             expect(error.message).toEqual("Invalid credentials")
//             expect(error.statusCode).toBe(401)
//         } finally {
//             expect.assertions(2)
//         }
//     })


//     test("Sucesso no login", async () => {
//         try {
//             const {accessToken} = await userBusinessMock.login("Hunter@dev.com", "123456")
//             expect(accessToken).toEqual("token")

//         } catch(error: any) {
//             console.log(error)
//         } finally {
//             expect.assertions(1)
//         }
//     })
// })