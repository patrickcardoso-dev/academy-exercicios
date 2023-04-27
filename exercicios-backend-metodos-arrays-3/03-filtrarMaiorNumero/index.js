const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const filtrarMaiorNumero = numeros.reduce((acumulador, elementoAtual) => {
    maiorNumero = acumulador;

    if (elementoAtual > maiorNumero) {
        maiorNumero = elementoAtual;
    };
    
    return maiorNumero;
});
console.log(filtrarMaiorNumero);
