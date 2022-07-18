import { CustomError } from "../error/BaseError";
import { User, stringToUserRole, UserRole } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/Authenticator";


export class UserBusiness {
   constructor(
      private idGenerator: IdGenerator,
      private hashGenerator: HashManager,
      private tokenGenerator: TokenGenerator,
      private userDatabase: UserDatabase
   ) { }

   public async signup(
      name: string,
      email: string,
      password: string,
      role: string
   ) {
      try {
         if (!name || !email || !password || !role) {
            throw new CustomError(422, "Missing input")
         }
         if (email.indexOf("@") === -1) {
            throw new CustomError(422, "Invalid email")
         }
         if (password.length < 6) {
            throw new CustomError(422, "Invalid password")
         }
         const id = this.idGenerator.generate()

         const cypherPassword = await this.hashGenerator.hash(password)

         const user = new User(id, name, email, cypherPassword, stringToUserRole(role))
         
         await this.userDatabase.createUser(user);

         const accessToken = this.tokenGenerator.generateToken({
            id,
            role: user.getRole(),
         })
         return { accessToken }
      } catch (error: any) {
         if (error.message.includes("key 'email'")) {
            throw new CustomError(409, "Email already in use")
         }
         throw new CustomError(error.statusCode, error.message)
      }
   }
   public async login(email: string, password: string) {
      try {
         if (!email || !password) {
            throw new CustomError(422, "Missing input")
         }
         const user = await this.userDatabase.getUserByEmail(email)
         if (!user) {
            throw new CustomError(401, "Invalid credentials")
         }
         const isPasswordCorrect = await this.hashGenerator.compare(
            password,
            user.getPassword()
         )
         if (!isPasswordCorrect) {
            throw new CustomError(401, "Invalid credentials")
         }
         const accessToken = this.tokenGenerator.generateToken({
            id: user.getId(),
            role: user.getRole(),
         })
         return { accessToken }
      } catch (error: any) {
         throw new CustomError(error.statusCode, error.message)
      }
   }

}
export default new UserBusiness(
   new IdGenerator(),
   new HashManager(),
   new TokenGenerator(),
   new UserDatabase()
)