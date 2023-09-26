import express from 'express';
import { listarConvidados, adicionarConvidado, removerConvidado } from '../controllers/convidados.js';

const rotas = express();

rotas.use(express.json());

rotas.get('/convidados', listarConvidados);
rotas.post('/convidados', adicionarConvidado);
rotas.delete('/convidados', removerConvidado);

export default rotas;