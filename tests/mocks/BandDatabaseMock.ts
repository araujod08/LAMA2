import { Band } from "../../src/model/Band";
import { BandMockCorrect } from "../BandMock";

export class BandDatabaseMock {
    public async createBand(
        band: Band
    ): Promise<void> {
    }
    public async getBandById (id: string): Promise<any> {
        return BandMockCorrect
    }
}