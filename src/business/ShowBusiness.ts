import { ShowDatabase } from "../data/ShowDatabase";
import { showInput } from "../model/Show";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export class ShowBusiness {

    public async show (input: showInput) {

        try {
            const { band_id, week_day, start_time, end_time, token} = input

            if( start_time < 8 || start_time > 23) {
                throw new Error ("Shows cannot begin at this time.")
            }

            if (!band_id || !week_day || !start_time || !end_time ) {
                throw new Error("Fill the fields correctly.");
            }

            const trueToken = new Authenticator().getData(token)

            if (! trueToken ) {
                throw new Error ("You are not logged in.")
            }

            const id = new IdGenerator().generate()

            const show = await new ShowDatabase().scheduleCheck(week_day, start_time, end_time)

            const checkArray = (array: any) => {
                if (array.length !== 0) {
                    throw new Error("There's already a show scheduled at this time");
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

            await new ShowDatabase().createShow(newShow)

        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}