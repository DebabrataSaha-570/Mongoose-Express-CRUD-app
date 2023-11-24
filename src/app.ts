import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//users routes
app.use('/api', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  const result = 'Welcome to Mongoose Express CRUD App ';
  res.send(result);
});

export default app;
