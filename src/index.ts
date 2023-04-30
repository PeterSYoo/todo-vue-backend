// -------------------------------------- Imports ------------------------------------ ***
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { userRouter } from './user/routes/userRouter';
// ----------------------------------------------------------------------------------- ***

dotenv.config(); // Load environment variables.
const app = express(); // New instance of express object.

// ------------------------------------- Middleware ---------------------------------- ***
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
// ----------------------------------------------------------------------------------- ***

// --------------------------------------- Routes ------------------------------------ ***
app.get('/', (req: Request, res: Response) => {
  res.send(`Hello, World! from ${process.env.PORT}`);
});
// ----------------------------------------------------------------------------------- ***

// --------------------------------------- Routers ----------------------------------- ***
app.use('/user', userRouter);
// ----------------------------------------------------------------------------------- ***

// ------------------------------------ Start Server --------------------------------- ***
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
// ----------------------------------------------------------------------------------- ***
