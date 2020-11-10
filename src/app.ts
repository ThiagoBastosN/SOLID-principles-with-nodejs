import express  from 'express';
import { createUserRoute } from './routes/createUserRoute'

const app = express();
app.use(express.json());


app.use('/createUser', createUserRoute)


app.listen(3333);

export { app }