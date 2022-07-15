import { Request, Response } from "express";
import BandBusiness from "../business/BandBusiness";
import { BandInput, GetBandByIdInput } from "../model/Band";

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

            await BandBusiness.createBand(input);
            
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

            const band = await BandBusiness.getBandById(getBand)

            res.status(200).send({band});
            
        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }
}