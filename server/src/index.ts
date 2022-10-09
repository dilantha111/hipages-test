import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes';
import cors from 'cors';
import dbInit from './db/init';

dotenv.config();

dbInit();

const app: Express = express();
const port = process.env.PORT;

app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
