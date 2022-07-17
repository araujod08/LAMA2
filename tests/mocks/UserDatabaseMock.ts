import { UserMockAdmin, UserMockNormal } from "./UserMock"
import { User } from "../../src/model/User"

export default class UserDatabaseMock {
    public async createUser(user: User): Promise<void> {
    }

    public async getUSerByEmail (email: string): Promise<User | undefined> {
        return UserMockNormal
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
    public async getAllUsers(): Promise<User[] | []> {
        return [UserMockNormal, UserMockAdmin]
    }
}