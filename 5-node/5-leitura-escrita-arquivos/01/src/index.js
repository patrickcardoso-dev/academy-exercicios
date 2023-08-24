import express from 'express';
import rotas from './routers/rotas.js';

const app = express();

rotas.use(express.json());
app.use(rotas);

app.listen(3000);