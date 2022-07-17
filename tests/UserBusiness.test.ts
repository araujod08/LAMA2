// import { UserBusiness } from "../src/business/UserBusiness"
// import { UserDatabase } from "../src/data/UserDatabase"
// import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
// import { HashManagerMock } from "./mocks/HashManagerMock"
// import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
// import  UserDatabaseMock from "./mocks/UserDatabaseMock"


// const userBusinessMock = new UserBusiness(
//     new IdGeneratorMock(),
//     new HashManagerMock(),
//     new AuthenticatorMock(),
//     new UserDatabaseMock() as unknown as  UserDatabase
// )

// describe("Testando o signup", () => {
//     test("Erro de nome", async () => {
//         try {
//             await userBusinessMock.createUser("", "Hunter@dev.com", "123456", "NORMAL")
//         } catch(error: any) {
//             expect(error.message).toEqual("Missing input")
//             expect(error.statusCode).toBe(422)
//         } finally {
//             expect.assertions(2)
//         }
//     })

//     test("Erro de email", async () => {
//         try {
//             await userBusinessMock.createUser("Hunter", "Hunterdev.com", "123456", "NORMAL")
//         } catch(error: any) {
//             expect(error.message).toEqual("Invalid email")
//             expect(error.statusCode).toBe(422)
//         } finally {
//             expect.assertions(2)
//         }
//     })

//     test("Error de senha", async () => {
//         try {
//             await userBusinessMock.createUser("Hunter", "Hunter@dev.com", "12345", "NORMAL")
//         } catch(error: any) {
//             expect(error.message).toEqual("Invalid password")
//             expect(error.statusCode).toBe(422)
//         } finally {
//             expect.assertions(2)
//         }
//     })

//     test("Erro de role", async () => {
//         try {
//             await userBusinessMock.createUser("Hunter", "Hunter@dev.com", "123456", "batata")
//         } catch(error: any) {
//             expect(error.message).toEqual("Invalid user role")
//             expect(error.statusCode).toBe(422)
//         } finally {
//             expect.assertions(2)
//         }
//     })

//     test("Sucesso no cadastro", async () => {
//         try {
//             const {accessToken} = await userBusinessMock.createUser("Hunter", "Hunter@dev.com", "123456", "NORMAL")
//             expect(accessToken).toEqual("token")
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