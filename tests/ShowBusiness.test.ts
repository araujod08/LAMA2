import {ShowBusiness }from "../src/business/ShowBusiness"
import { showInput, SHOW_ROLE } from "../src/model/Show"
import { Authenticator } from "../src/services/Authenticator"
import { IdGenerator } from "../src/services/IdGenerator"
import { ShowDatabaseMock } from "./mocks/ShowDatabaseMock"

const showbusinessMock = new ShowBusiness(
    new Authenticator(),
    new IdGenerator(),
    new ShowDatabaseMock
)

describe("Show tests", () => {
    test('Throw Error if fields are empty.', async () => {
        const input: showInput = {
            band_id: '',
            week_day: SHOW_ROLE.FRIDAY,
            start_time: 15,
            end_time: 18,
            token: 'token'
        }
        try {
            await showbusinessMock.show(input)
        } catch (error:any) {
            expect(error.message).toEqual("Please fill all fields.")
        } finally {
            expect.assertions(1)
        }
    })
    test('Throw Erro if there is already a show scheduled at a certain time', async () => {
        const input: showInput = {
            band_id: 'fdgh',
            week_day: SHOW_ROLE.FRIDAY,
            start_time: 13,
            end_time: 15,
            token: '1234'
        }
        try {
            await showbusinessMock.show(input)
        } catch (error:any) {
            expect(error.message).toEqual("There's already a show scheduled at this time")
        } finally {
            expect.assertions(1)
        }
    })
})