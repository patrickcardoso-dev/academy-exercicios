import express from 'express';
import { buscarEnderecoPorCep } from '../controllers/enderecos.js';

const rotas = express();

rotas.get("/enderecos/:cep", buscarEnderecoPorCep);

export default rotas;