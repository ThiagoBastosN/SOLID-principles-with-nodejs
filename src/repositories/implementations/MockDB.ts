import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository'

//This mock database will implement the user repository.
//This means that it'll have the format we have defined before.
export class MockDb implements IUserRepository
{
    private users: User[] = [];

    async findByEmail(email: string): Promise<User>
    {
        const user = this.users.find(user => user.email === email);

        return user;
    }

    async save(user: User): Promise<void>
    {
        this.users.push(user);
    }

}