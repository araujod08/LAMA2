import { weekdays } from "moment"


export default class Show {
    constructor (
        private id: string,
        private week_day: SHOW_ROLE,
        private start_time: number,
        private end_time: number,
        private band_id: string,
    ) {}
    getId() {
        return this.id
    }
    getWeekDay() {
        return this.week_day
    }    
    getStartTime() {
        return this.start_time
    }    
    getEndTime() {
        return this.end_time
    }    
    getBandId() {
        return this.band_id
    }    

}

export interface getShowDayInput  {
    week_day: string,
    token: string
}

export interface showInput {
    band_id: string,
    week_day: SHOW_ROLE,
    start_time: number,
    end_time: number,
    token: string
}

export enum SHOW_ROLE {
    FRIDAY = "FRIDAY",
    SATUDAY = "SATURDAY",
    SUNDAY = "SUNDAY"
}

