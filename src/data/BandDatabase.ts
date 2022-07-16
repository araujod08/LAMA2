import { CustomError } from "../error/BaseError";
import { Band } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";


export class BandDatabase extends BaseDatabase {

    private static TABLE_NAME = "lama_bands";

    public async createBand(
        band: Band
    ): Promise<void> {
        try {
            
            await BaseDatabase.connection
                .insert( band )
                .into(BandDatabase.TABLE_NAME);
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }

    public async getBandById (id: string): Promise<any> {
        try {
            const result = await BaseDatabase.connection
            .select("*")
            .from(BandDatabase.TABLE_NAME)     
            .where({id})     
            return result[0]
        } catch (error:any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }

}
