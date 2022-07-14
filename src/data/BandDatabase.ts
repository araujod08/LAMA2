import { Band } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";


export class BandDatabase extends BaseDatabase {

    private static TABLE_NAME = "lama_band";

    public async createBand(
        band: Band
    ): Promise<void> {
        try {
            await this.getConnection()
                .insert({ band })
                .into(BandDatabase.TABLE_NAME);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

}
