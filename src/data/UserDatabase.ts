import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";
import { CustomError } from "../error/BaseError";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "lama_users";

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      await BaseDatabase.connection
        .insert({
          id,
          email,
          name,
          password,
          role
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage)
    }
  }

  public async getUserByEmail(email: string): Promise<User> {
    try {
      const result = await BaseDatabase.connection
        .select("*")
        .from(UserDatabase.TABLE_NAME)
        .where({ email });
  
      return User.toUserModel(result[0]);
      
    } catch (error:any) {
      throw new CustomError(400, error.sqlMessage)
    }
  }

}
