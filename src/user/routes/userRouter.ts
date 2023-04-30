// -------------------------------------- Imports ------------------------------------ ***
import express, { Request, Response } from 'express';
// ----------------------------------------------------------------------------------- ***

const router = express.Router(); // New instance of express router object.

// --------------------------------------- Routes ------------------------------------ ***
router.get('/', (req: Request, res: Response) => {
  res.send('This is the /user route');
});
// ----------------------------------------------------------------------------------- ***

export const userRouter = router;
