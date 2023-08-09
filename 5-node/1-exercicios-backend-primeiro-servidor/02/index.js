const express = require('express');
const app = express();

let seconds = 0;
let minutes = 0;

const formatTimer = () => {
    const formatedSeconds = String(seconds).padStart(2, '0');
    const formatedMinutes = String(minutes).padStart(2, '0');
    const formatedTimer = `${formatedMinutes} minutos e ${formatedSeconds} segundos`;
    return formatedTimer;
}

setInterval(() => {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
}, 1000);


/*
app.get('/', (req, res) => {
    res.send(chronometer);
});

app.get('/iniciar', (req, res) => {
});

app.get('/pausar', (req, res) => {
});

app.get('/continuar', (req, res) => {
});

app.get('/zerar', (req, res) => {
});
*/

app.listen(8000)