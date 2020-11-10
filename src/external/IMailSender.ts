//Define the address format.
interface IAddres
{
    email: string;
    name: string; 
}

//Define the messages format.
export interface IMessage
{
    to: IAddres;
    from: IAddres;
    subject: string;
    body: string;
}

//Define the mail sender format.
export interface IMailSender
{
    sendMail(message: IMessage): Promise<void>;
}