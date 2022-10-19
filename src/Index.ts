import express from 'express';
import cors from 'cors';
import { routes } from './Routes';

const app = express();

app.listen(3335);
app.use(cors());
app.use(routes);

