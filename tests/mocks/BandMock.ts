import { Band } from "../../src/model/Band";

export const BandMockCorrect = new Band(
    "idband1",
    "calypso",
    "forró",
    "Joelma"
)

export const BandMockInvalid = new Band(
    "idband2",
    "Chiquititas",
    "pop",
    "se o seu coração tem buraquinhos"
)