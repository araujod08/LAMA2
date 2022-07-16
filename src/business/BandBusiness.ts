import { compare } from "bcryptjs";
import { BandDatabase } from "../data/BandDatabase";
import { CustomError } from "../error/BaseError";
import { Band, BandInput, GetBandByIdInput } from "../model/Band";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export class BandBusiness {

    constructor( 
        private authenticator: Authenticator,
        private idGenerator: IdGenerator,
        private bandDatabase: BandDatabase
    ){ }

    async createBand(input: BandInput) {

        try {
            const { token, name, music_genre, responsible } = input

            const trueToken = this.authenticator.getData(token)
            if (!trueToken && trueToken !== UserRole.ADMIN) {
                throw new CustomError(403, "Unauthorized.")
            }

            if(!name) {
                throw new CustomError(422, "Please fill the blanks.")
            }
            if(!music_genre) {
                throw new CustomError(422, "Please fill the blanks.")
            }
            if(!responsible) {
                throw new CustomError(422, "Please fill the blanks.")
            }

            const id = this.idGenerator.generate()

            const newBand: Band = new Band(id, name, music_genre, responsible)
            await this.bandDatabase.createBand(newBand);

        } catch (error:any ) {
            throw new CustomError(error.statusCode, error.message)

        }
    }

    async getBandById (input: GetBandByIdInput) {
        try {
            const  {id, token} = input

            const trueToken = new Authenticator().getData(token)
            if ( !trueToken ) {
                throw new CustomError(403, "Unauthorized.")
            }
            if (!id) {
                throw new CustomError(422, "Missing id.")
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
            throw new CustomError(error.statusCode, error.message)
        }
    }
}

export default new BandBusiness(
    new Authenticator(),
    new IdGenerator(),
    new BandDatabase()
)