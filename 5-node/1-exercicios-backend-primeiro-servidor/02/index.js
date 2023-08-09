const express = require('express');
const app = express();

let seconds = 0;
let minutes = 0;
let interval;

const timer = () => {
    if (minutes === 60) {
        return
    }   
    
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
};

const play = () => {
    interval = setInterval(timer, 1000);
    return interval;
}

const pause = (interval) => {
    clearInterval(interval);
}

const stop = (interval) => {
    seconds = 0;
    minutes = 0;
    clearInterval(interval);
}

const formatTimer = () => {

    const formatedSeconds = String(seconds).padStart(2, '0');
    const formatedMinutes = String(minutes).padStart(2, '0');
    const formatedTimer = `${formatedMinutes} minutos e ${formatedSeconds} segundos`;
    return formatedTimer;
}

app.get('/', (req, res) => {
    res.send(`Tempo atual do cronometro: ${formatTimer()}`);
});

app.get('/iniciar', (req, res) => {
    play();
    res.send("Cronômetro iniciado!");
});

app.get('/pausar', (req, res) => {
    pause(interval);
    res.send("Cronômetro pausado!")
});

app.get('/continuar', (req, res) => {
    play();
    res.send("Cronômetro continuando!");
});

app.get('/zerar', (req, res) => {
    stop(interval);
    res.send("Cronômetro zerado!");
});

app.listen(8000)