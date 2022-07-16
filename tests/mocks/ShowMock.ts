import Show, { SHOW_ROLE } from "../../src/model/Show";
import { ShowDatabaseReturn } from "../../src/model/Show";



export const showMock1 = new Show(
    'abc', SHOW_ROLE.FRIDAY, 13, 15, '123'
    )

export const showMock2 = new Show(
    'xyz', SHOW_ROLE.SUNDAY, 20, 23, '321'
    )

export const ShowDBMock1: ShowDatabaseReturn = {
    name: 'Coldplay',
    music_genre: 'Alternative'
}

export const ShowDBMock2: ShowDatabaseReturn = {
    name: 'Slipknot',
    music_genre: 'Heavy Metal'
}