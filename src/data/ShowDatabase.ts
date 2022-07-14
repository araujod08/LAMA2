import Show, { SHOW_ROLE } from "../model/Show";
import { BaseDatabase } from "./BaseDatabase";


export class ShowDatabase extends BaseDatabase {

    private static TABLE_NAME = "lama_shows"

    public async createShow (show: Show) {
        try {
            
            await BaseDatabase.connection
            .insert(show)
            .into(ShowDatabase.TABLE_NAME)

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

    public async scheduleCheck ( week_day: SHOW_ROLE, start_time:number, end_time:number) {
        try {
            const response = await BaseDatabase.connection
            .select("*")
            .from(ShowDatabase.TABLE_NAME)
            .where({week_day: week_day})
            .whereBetween('start_time', [start_time, end_time])

            return response

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

}