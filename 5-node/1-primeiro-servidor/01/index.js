const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indexJogador = 0;

app.get('/', (req, res) => {
    if (indexJogador === jogadores.length) {
        indexJogador = 0
    };

    res.send(jogadores[indexJogador++]);
});

app.listen(3000)