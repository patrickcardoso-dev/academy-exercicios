import express from 'express';
import { jogadorDoTurno, removerJogador, adicionarJogador } from './controllers/rodada.js';

const app = express();

app.get('/', jogadorDoTurno);
app.get('/remover', removerJogador);
app.get('/adicionar', adicionarJogador);

app.listen(8000);