import { ShowDatabase } from "../data/ShowDatabase";
import { CustomError } from "../error/BaseError";
import { getShowDayInput, showInput } from "../model/Show";
import { TokenGenerator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export class ShowBusiness {

    constructor(
        private authenticator: TokenGenerator,
        private idGenerator: IdGenerator,
        private showDatabase: ShowDatabase
    ){}

    public async show (input: showInput) {

        try {
            const { band_id, week_day, start_time, end_time, token} = input

            if( start_time < 8 || start_time > 23) {
                throw new CustomError(400, "A show cannot be scheduled at this time period.")
            }

            if (!band_id || !week_day || !start_time || !end_time ) {
                throw new CustomError(204, "Please fill all fields.")
            }

            const trueToken = this.authenticator.getData(token)

            if (! trueToken ) {
                throw new CustomError(403, "Unauthorized.")
            }

            const id =this.idGenerator.generate()

            const show = await this.showDatabase.scheduleCheck(week_day, start_time, end_time)

            const checkArray = (array: any) => {
                if (array.length !== 0) {
                    throw new CustomError(400, "There's already a show scheduled at this time");
                }
            }
            
            checkArray(show)

            const newShow: any = {
                id, 
                week_day,
                start_time,
                end_time,
                band_id
            }

            await this.showDatabase.createShow(newShow)

        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    public async getShowByWeekDay(input: getShowDayInput) {
        try {
            const {week_day, token} = input

            const trueToken = this.authenticator.getData(token)

            if(!trueToken) {
                throw new CustomError(403, "Unauthorized.")
            }

            const show = await this.showDatabase.getShowByWeekDay(week_day)

            return show

        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}

export default new ShowBusiness(
    new TokenGenerator(),
    new IdGenerator(),
    new ShowDatabase()
)