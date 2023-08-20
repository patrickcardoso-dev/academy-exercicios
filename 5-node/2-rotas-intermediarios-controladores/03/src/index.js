import express from 'express';
import rotas from './routers/rotas.js';

const app = express();

app.use(rotas);

app.listen(8000);