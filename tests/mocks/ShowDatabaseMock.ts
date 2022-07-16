import Show, { ShowDatabaseReturn, SHOW_ROLE } from "../../src/model/Show";
import { ShowDBMock1, ShowDBMock2, showMock1, showMock2 } from "./ShowMock";


export class ShowDatabaseMock {
    public async createShow (
        show: Show
    ): Promise <void> {}

    public async scheduleCheck(week_day: SHOW_ROLE, start_time:number, end_time:number){
        return [showMock1, showMock2]
    }
    
    public async getShowByWeekDay (week_day: string) {
        return [ShowDBMock1, ShowDBMock2]
    }
}