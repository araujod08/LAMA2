import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { BandBusiness } from "../business/BandBusiness";

export class BandController {
    async newBand(req: Request, res: Response) {
        try {
            const token = new Authenticator().getData(req.headers.authorization as string)
            const { name, music_genre, responsible } = req.body
            const bandBusiness = new BandBusiness(name, music_genre, responsible);

            res.status(200).send('Band created successfully');

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}