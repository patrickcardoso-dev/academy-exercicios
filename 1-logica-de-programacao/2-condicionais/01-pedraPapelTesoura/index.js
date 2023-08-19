const jogada1 = "pedra";
const jogada2 = "tesoura";


if (jogada1 === "pedra" && jogada2 === "tesoura" || jogada1 === "tesoura" && jogada2 === "pedra") {
    console.log("Pedra venceu!");
} else if (jogada1 === "pedra" && jogada2 === "papel" || jogada1 === "papel" && jogada2 === "pedra") {
    console.log("Papel venceu!");
} else if ( jogada1 === "tesoura" && jogada2 === "papel" || jogada1 === "papel" && jogada2 === "tesoura" ) {
    console.log("Tesoura venceu!");
} else if ( jogada1 === jogada2 ) {
    console.log("Empatou!");
} else {
    console.log("Jogada inválida.");
};


