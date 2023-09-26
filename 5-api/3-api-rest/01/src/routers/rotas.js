import express from 'express';
import { listarAlunos, listarAlunoPorId, adicionarAluno, removerAluno } from '../controllers/alunos.js';
import { autenticador } from '../middlewares/autenticacao.js';

const rotas = express();

rotas.use(express.json());

rotas.get('/alunos', listarAlunos);
rotas.get('/alunos/:id', autenticador, listarAlunoPorId);
rotas.post('/alunos', autenticador, adicionarAluno);
rotas.delete('/alunos/:id', autenticador, removerAluno);

export default rotas;