import { BandDatabase } from "../data/BandDatabase";
import { Band } from "../model/Band";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export class BandBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private authenticator: Authenticator,
        private bandDatabase: BandDatabase
    ) { }

    async createBand(name: string, music_genre: string, responsible: string, token: string) {

        const id = this.idGenerator.generate()
        const tokenData = this.authenticator.getData(token)

        if (!tokenData) {
            throw new Error('Invalid token');
        }

        const newBand = new Band(id, name, music_genre, responsible)
        await this.bandDatabase.createBand(newBand);

        return id 
    }
}