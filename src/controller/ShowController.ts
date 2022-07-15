import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { getShowDayInput, showInput } from "../model/Show";


export class ShowController {

    public async scheduleShow(req: Request, res: Response) {
        try {
            const { week_day, start_time, end_time, band_id } = req.body
            const token = req.headers.authorization as string

            const schedule: showInput = {
                week_day,
                start_time,
                end_time,
                band_id,
                token
            }

            await new ShowBusiness().show(schedule)

            res.status(200).send("Show successfully scheduled.")
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    public async getShowByWeekDay(req:Request, res: Response) {
        try {
            const { week_day } = req.params
            const token = req.headers.authorization as string

            if (!week_day) {
                throw new Error("Please isert 'Friday, 'Satrday' or 'Friday'.");
            }

            const input: getShowDayInput = {
                week_day,
                token
            }

            const response = await new ShowBusiness().getShowByWeekDay(input)

            res.status(200).send(response)

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}