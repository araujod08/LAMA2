import { Band } from "../../src/model/Band";
import { UserRole } from "../../src/model/User";
import { BandMockCorrect } from "../BandMock";

interface AuthenticationData {
    id: string;
    role: UserRole;
}

export class AuthenticatorMock {
    public generateToken(input: AuthenticationData) {
        return 'token';
    }
    public getData(token: string): AuthenticationData {
        const tokenData: AuthenticationData = {
            id: "idband1",
            role: UserRole.ADMIN
        }
        return tokenData
    }
}