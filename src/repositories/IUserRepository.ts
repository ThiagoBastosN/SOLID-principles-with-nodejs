import { User } from "../entities/User";

//The format that we want our user repositories to have.
//We'll make so the database logic will always have these functions, independently of the database.
export interface IUserRepository
{
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;
}