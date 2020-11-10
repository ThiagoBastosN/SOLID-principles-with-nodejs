import { uuid } from 'uuidv4';

export class User
{
    public readonly id: string;

    public name: string;
    public password: string;
    public email: string;

    constructor(props: Omit<User, 'id'>, id?: string)
    {
        Object.assign(this, props);

        if(!id)
        {
            //If the user has not an ID already
            //create one.
            this.id = uuid();
        }
    }
}