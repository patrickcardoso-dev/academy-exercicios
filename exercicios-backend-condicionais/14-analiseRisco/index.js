//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

if (quantidadeDeAguaIngerida < 1.5 ) {
    console.log("Risco alto de complicações. Você está ingerindo pouquissima água, beba mais água!");
} else if (quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3) {
    console.log("Risco moderado de complicações. Você está ingerindo pouca água, beba mais!");
} else if (quantidadeDeAguaIngerida > 3) {
    console.log("Risco baixo de complicações. Você está ingerindo uma boa quantidade de água, parabéns!");
} else {
    console.log("Entrada inválida.");
}