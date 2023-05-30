const ladoA = 3;
const ladoB = 3;

if (ladoA >=0 && ladoA <=6 && ladoB >=0 && ladoB <=6) {
    if (ladoA === ladoB) {
        if (ladoA === 0 && ladoB === 0) {
        console.log("É uma bucha de branco!")
    } else if (ladoA === 1 && ladoB === 1) {
        console.log("É uma bucha de ás!")
    } else if (ladoA === 2 && ladoB === 2) {
        console.log("É uma bucha de duque!")
    } else if (ladoA === 3 && ladoB === 3) {
        console.log("É uma bucha de terno!")
    } else if (ladoA === 4 && ladoB === 4) {
        console.log("É uma bucha de quadra!")
    } else if (ladoA === 5 && ladoB === 5) {
        console.log("É uma bucha de quina!")
    } else if (ladoA === 6 && ladoB === 6) {
        console.log("É uma bucha de sena!")
    }} else if (ladoA !== ladoB) {
        console.log("Não é uma bucha!")
    };
} else {
    console.log("Pedra inválida.")
};
 






