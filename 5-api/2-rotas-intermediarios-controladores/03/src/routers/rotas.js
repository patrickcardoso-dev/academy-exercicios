import express from 'express';
import { listarImoveis, listarImovelPorId } from '../controllers/listarImoveis.js';

const app = express();

app.get('/imoveis', listarImoveis);
app.get('/imoveis/:id', listarImovelPorId);

export default app;