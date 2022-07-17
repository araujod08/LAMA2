import { UserMockAdmin, UserMockNormal } from "./UserMock"
import { User } from "../../src/model/User"

export default class UserDatabaseMock {
    public async signup(user: User): Promise<void> {

    }
    public async login(email: string): Promise<User | undefined> {
        switch (email) {
            case "Araujod08mocknormal@email.com":
                return UserMockNormal
            case "Araujod08mockadmin@email.com":
                return UserMockAdmin
            default:
                return undefined
        }
    }
    public async getUserById(id: string): Promise<User | undefined> {
        switch (id) {
            case "idmocknormal":
                return UserMockNormal
            case "idmockadmin":
                return UserMockAdmin
            default:
                return undefined
        }
    }
    public async getAllUsers(): Promise<User[]> {
        return [UserMockNormal, UserMockAdmin]
    }
}