import { User } from "../../entities/User";
import { IMailSender } from "../../external/IMailSender";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO"

export class CreateUserLogic
{
    //We'll receive the repository dependency in the constructor
    //so we can apply the Dependency Inversion principle.
    constructor(
        //In TypeScript we can automatically instantiate a private variable into the class like this.
        private usersRepository: IUserRepository,
        private mailSender: IMailSender
    ){}

    //We receive the data format that came from the
    //Data Transfer Object.
    async execute(data: ICreateUserRequestDTO)
    {
        try
        {
            const userEmailAlreadyExists = await this.usersRepository.findByEmail(data.email);
            //Log the request received
            console.log(data);
            if(userEmailAlreadyExists) throw new Error("User already exists");

            //We pass the entire object we receive from the DTO as props.
            const user = new User(data);

            await this.usersRepository.save(user);

            await this.mailSender.sendMail({
                to: {
                    email: data.email,
                    name: data.name
                },
                from: {
                    email: "site@site.com",
                    name: "Site team"
                },
                subject: "Welcome",
                body: "You can now login into the site."
            });

        }catch(err)
        {
            throw new Error("Something went wrong");
        }
    }
}