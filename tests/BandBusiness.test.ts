import { BandBusiness } from "../src/business/BandBusiness"
import { BandInput } from "../src/model/Band"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { BandDatabaseMock } from "./mocks/BandDatabaseMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"

const bandBusinessMock = new BandBusiness(
    new AuthenticatorMock(),
    new IdGeneratorMock(),
    new BandDatabaseMock
)

describe('Band Tests', () => {
    test('Should not throw Error', async () => {

        const input: BandInput = {
            token: "batata",
            name: "Coldplay",
            music_genre: "Alternative/indie",
            responsible: "Chris Martin"
        }
        await expect(bandBusinessMock.createBand(input)).resolves.not.toThrow()
    })

    test('Should throw Error if one of the fields is empty', async () => {
        const input: BandInput = {
            token: "batata",
            name: "",
            music_genre: "Alternative/indie",
            responsible: "Chris Martin"
        }
        try {
            await bandBusinessMock.createBand(input)
        } catch (error: any) {
            expect(error.message).toEqual("Please fill the blanks.")
        } finally {
            expect.assertions(1)
        }
    })
})

