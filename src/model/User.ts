export class User {
    constructor(
        private id: string,
        private email: string,
        private name: string,
        private password: string,
        private role: UserRole
    ) { }

    getId() {
        return this.id;
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getRole() {
        return this.role;
    }

    setId(id: string) {
        this.id = id;
    }

    setName(name: string) {
        this.name = name;
    }

    setEmail(email: string) {
        this.email = email;
    }

    setPassword(password: string) {
        this.password = password;
    }

    setRole(role: UserRole) {
        this.role = role;
    }

}

export const stringToUserRole = (input: string): UserRole => {
    switch (input) {
        case "NORMAL":
            return UserRole.NORMAL;
        case "ADMIN":
            return UserRole.ADMIN;
        default:
            throw new Error("Invalid user role");
    }
}

export interface UserInputDTO {
    email: string;
    name: string;
    password: string;
    role: UserRole;
}

export interface LoginInputDTO {
    email: string;
    password: string;
}

export enum UserRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

