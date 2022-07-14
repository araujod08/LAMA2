import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { BandBusiness } from "../business/BandBusiness";
import { BandInput, GetBandByIdInput } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class BandController {

    async newBand(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const { name, music_genre, responsible } = req.body
            
            const input: BandInput = {
                token,
                name, 
                music_genre,
                responsible
            }


            await new BandBusiness().createBand(input);
            
            res.status(200).send("Deu certo caralho");

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async getBandById(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id
            const getBand: GetBandByIdInput = {id, token}

            const band = await new BandBusiness().getBandById(getBand)

            res.status(200).send({band});
            
        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }
}