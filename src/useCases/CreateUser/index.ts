import { MailTrap } from "../../external/implementations/MailTrap";
import { MockDb } from "../../repositories/implementations/MockDB";
import { CreateUserController } from "./CreateUserController";
import { CreateUserLogic } from "./CreateUserLogic";

const mockDb = new MockDb();
const mailTrap = new MailTrap();

const createUserLogic = new CreateUserLogic(mockDb, mailTrap);
const createUserController = new CreateUserController(createUserLogic);



export { createUserController };