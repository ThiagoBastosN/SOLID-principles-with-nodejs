import express from 'express';
//Notice that this is an implementation, we're importing the object
//and not the class.
import { createUserController } from '../useCases/CreateUser/index';
const createUserRoute = express.Router();

createUserRoute.post('/', (req, res) =>
{
    createUserController.handleRequest(req, res);
});


export { createUserRoute };