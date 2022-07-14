import { compare } from "bcryptjs";
import { BandDatabase } from "../data/BandDatabase";
import { Band, BandInput, GetBandByIdInput } from "../model/Band";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export class BandBusiness {

    async createBand(input: BandInput) {

        try {
            const { token, name, music_genre, responsible } = input

            const trueToken = new Authenticator().getData(token)
            if (!trueToken && trueToken !== UserRole.ADMIN) {
                throw new Error("You need to be looged in.");
            }


            if (!name || !music_genre || !responsible) {
                throw new Error("Empty fields.");
            }

            const id = new IdGenerator().generate()

            const newBand: Band = new Band(id, name, music_genre, responsible)
            await new BandDatabase().createBand(newBand);

        } catch (error:any ) {
            throw new Error(error.message);
        }

    }

    async getBandById (input: GetBandByIdInput) {
        try {
            const  {id, token} = input

            const trueToken = new Authenticator().getData(token)
            if ( !trueToken ) {
                throw new Error("You need to be looged in.");
            }
            if (!id) {
                throw new Error("Id is missing");
            }

            const searchBand = await new BandDatabase().getBandById(id)

            const band = {
                id: searchBand.id,
                name: searchBand.name,
                music_genre: searchBand.music_genre,
                responsible: searchBand.responsible
            }

            return band

        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}