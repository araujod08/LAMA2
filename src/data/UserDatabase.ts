import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {

   private static TABLE_NAME = "lama_users"

   private toModel(dbModel?: any): User | undefined {
      return (
        dbModel &&
        new User(
          dbModel.id,
          dbModel.name,
          dbModel.email,
          dbModel.password,
          dbModel.role
        )
      );
    }

   public async createUser(user: User): Promise<void> {
      try {
         await BaseDatabase.connection
         .insert(user)
         .into(UserDatabase.TABLE_NAME)
      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   public async getUserByEmail (email: string): Promise<User | undefined> {
      try {

         const result = await BaseDatabase.connection(UserDatabase.TABLE_NAME)
         .select("*")
         .where({email})
      
         return this.toModel(result[0])
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }


}


