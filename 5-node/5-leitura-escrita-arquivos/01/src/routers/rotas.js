import express from 'express';
import { listarProdutos, listarProdutoPorId, calcularFretePorCep } from '../controllers/produtos.js';

const rotas = express();

rotas.get("/produtos", listarProdutos );
rotas.get("/produtos/:idProduto", listarProdutoPorId);
rotas.get("/produtos/:idProduto/frete/:cep", calcularFretePorCep);

export default rotas;