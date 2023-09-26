import express from 'express';
import { soma, subtracao, multiplicacao, divisao } from "./controllers/calculator.js"

const app = express();

app.get("/somar", soma);
app.get("/subtrair", subtracao);
app.get("/multiplicar", multiplicacao);
app.get("/dividir", divisao);

app.listen(3000);