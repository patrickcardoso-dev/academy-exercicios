const ladoA = 3;
const ladoB = 3;

if (ladoA >=0 && ladoA <=6 && ladoB >=0 && ladoB <=6) {
    if (ladoA === ladoB) {
        console.log("É uma bucha!")
    } else {
        console.log("Não é uma bucha!")
    };
} else {
    console.log("Pedra inválida.")
}
