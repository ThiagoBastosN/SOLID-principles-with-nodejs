import { Request, Response } from 'express';
import { CreateUserLogic } from './CreateUserLogic';

//Receive express request and returns a response.
export class CreateUserController
{
    //Again we pass the dependency from the constructor, avoiding "New" instances.
    constructor(
        private createUserLogic: CreateUserLogic
    ){}

    async handleRequest(req: Request, res: Response): Promise<Response>
    {
        try
        {
            const { name, password, email } = req.body;
            
            await this.createUserLogic.execute({
                name,
                password,
                email
            })
    
            return res.status(200).send('User created');
        }catch(err)
        {
            return res.status(400).json({
                message: err.message || "Unexpected error"
            });
        }
    }
}