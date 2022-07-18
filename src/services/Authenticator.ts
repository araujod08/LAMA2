import * as jwt from "jsonwebtoken";
import { UserRole } from "../model/User";

export class TokenGenerator {
  public generateToken(input: AuthenticationData,
    expiresIn: string = process.env.ACCESS_TOKEN_EXPIRES_IN!): string {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role
      },
      process.env.JWT_KEY as string,
      {
        expiresIn,
      }
    );
    return token;
  }
  public getData(token: string): AuthenticationData {
    const tokenData = jwt.verify(
      token, process.env.JWT_KEY as string
    )
    return tokenData as AuthenticationData
  }
}

interface AuthenticationData {
  id: string;
  role: UserRole;
}