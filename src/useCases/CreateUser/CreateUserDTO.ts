//Data transfer object. How we'll pass data between the controller and the logic.
export interface ICreateUserRequestDTO
{
    name: string;
    password: string;
    email: string;
}