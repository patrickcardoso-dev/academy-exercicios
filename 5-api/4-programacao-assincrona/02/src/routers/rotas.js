import express from 'express';
import { apresentarPokemons, buscarPokemon } from '../controllers/pokemons.js';

const rotas = express();

rotas.get('/pokemon', apresentarPokemons);
rotas.get('/pokemon/:idOuNome', buscarPokemon);

export default rotas;