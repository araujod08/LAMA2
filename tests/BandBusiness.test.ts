import { BandBusiness }  from "../src/business/BandBusiness"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { BandDatabaseMock } from "./mocks/BandDatabaseMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"

const bandBusinessMock = new BandBusiness(
    new AuthenticatorMock(),
    new IdGeneratorMock(),
    new BandDatabaseMock
)

describe('test', async () => {
    test('test to see if the data is correct')
    try {
        await bandBusinessMock.createBand({
            token: "1", 
            name:"calypso", 
            music_genre: "a lua me traiu", 
            responsible: "joelma rainha, chimbinha nadinha"
        })
    } catch (error: any) {
        console.log(error)
    } finally {
        expect.assertions(1)
    }
})

