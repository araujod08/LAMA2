export class Band {
    constructor(
        private id: string,
        private name: string,
        private music_genre: string,
        private responsible: string
    ) { }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getMusicGenre() {
        return this.music_genre;
    }

    getResponsible() {
        return this.responsible;
    }

    static toUserModel(band: any): Band {
        return new Band(band.id, band.name, band.music_genre, band.responsible)
    }

}

export interface BandInput {
    name: string;
    music_genre: string;
    responsible: string;
}

