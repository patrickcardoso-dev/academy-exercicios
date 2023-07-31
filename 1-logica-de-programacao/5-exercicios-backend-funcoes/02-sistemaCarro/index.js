const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (carro.ligado) {
            console.log("Este carro já está ligado");
        } else {
            carro.ligado = true;
            statusCarro();
        };
    },
    desligar: function () {
        if (!carro.ligado) {
            console.log("Este carro já está desligado");
        } else if (carro.velocidade === 0) {
            carro.ligado = false;
            statusCarro();
        } else if (carro.ligado && carro.velocidade != 0) {
            console.log("Desacelere o carro antes de desligar.");
        }
    },
    acelerar: function () {
        if (!carro.ligado && carro.velocidade === 0) {
            console.log("Não é possível acelerar um carro desligado. Ligando carro");
            startCarro();
        } else if (carro.ligado && carro.velocidade === 0) {
            carro.velocidade += 10;
            statusCarro();
        } else {
            carro.velocidade += 10;
            statusCarro();            
        };
    },
    desacelerar: function () {
        if (!carro.ligado) {
            console.log("Não é possível desacelerar um carro desligado");
        } else if (carro.ligado && carro.velocidade === 0) {
            console.log("Velocidade zerada, desligando carro");
            stopCarro();
        } else {
            carro.velocidade -= 10;
            statusCarro();
        };
    },
};

function statusCarro() {
    if (carro.ligado) {
        console.log(`Carro ligado. Velocidade: ${carro.velocidade}`);
    } else {
        console.log(`Carro desligado. Velocidade: ${carro.velocidade}`);
    }
};

function startCarro() {
    carro.ligado = true;
    carro.velocidade += 10;
    statusCarro();
};    

function stopCarro() {
    carro.ligado = false;
    statusCarro();
};

carro.desligar(carro);
carro.ligar(carro);
carro.ligar(carro);
carro.acelerar(carro);
carro.acelerar(carro);
carro.desacelerar(carro);
carro.desligar(carro);
carro.acelerar(carro);
carro.desacelerar(carro);
