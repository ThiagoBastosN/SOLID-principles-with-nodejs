import { IMailSender, IMessage } from "../IMailSender";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class MailTrap implements IMailSender
{
    private transporter: Mail;
    constructor()
    {
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
            user: "149d0d794bf2bd",
            pass: "fe04ef3210828c"
            }
        })
    }

    async sendMail(message: IMessage): Promise<void>
    {
        await this.transporter.sendMail(
            {
                to:{
                    name: message.to.name,
                    address: message.to.email
                },
                from:{
                    name: message.from.name,
                    address: message.from.email
                },
                subject: message.subject,
                html: message.body
            }
        )
    }
}