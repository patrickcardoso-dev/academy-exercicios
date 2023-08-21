import express from 'express';
import { consultarLivros, consultarLivroPorId, adcionarLivro, substituirLivro, alterarLivro, removerLivro } from '../controllers/livros.js';

const rotas = express();

rotas.use(express.json());

rotas.get('/livros', consultarLivros);
rotas.get('/livros/:id', consultarLivroPorId);
rotas.post('/livros', adcionarLivro);
rotas.put('/livros/:id', substituirLivro);
rotas.patch('/livros/:id', alterarLivro);
rotas.delete('/livros/:id', removerLivro);

export default rotas;