const celular = 7199918888;

function formatarNumeroCelular () {
    let celularString = String(celular);
    let numeroDDD;
    let primeiroBloco;
    let segundoBloco;
    let numeroFormatado;
    
    if (celularString.length >= 10) {  // com DDD e sem 9
        numeroDDD = celularString.slice(0, 2);
        primeiroBloco = celularString.slice(2, 6);
        segundoBloco = celularString.slice(6);
        numeroFormatado = `(${numeroDDD}) 9 ${primeiroBloco}-${segundoBloco}`;

    } else if (celularString.length == 8 || celularString.length == 9) {
        celularString = celularString.padStart(9, "9");
        primeiroBloco = celularString.slice(1, 5);
        segundoBloco = celularString.slice(5);
        numeroFormatado = `9 ${primeiroBloco}-${segundoBloco}`
    };

    return numeroFormatado;
};


console.log(formatarNumeroCelular(celular));