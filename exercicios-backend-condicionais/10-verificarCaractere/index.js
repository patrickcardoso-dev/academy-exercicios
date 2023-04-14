const caractere = "E";

if (caractere >= 0 && caractere <= 9) {
    console.log("Esse caractere é um número.");
} else if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log("Esse caractere é uma vogal maiúscula.");
} else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log("Esse caractere é uma vogal minúscula.");
} else if (caractere > "a" && caractere <= "z") {
    console.log("Esse caractere é uma consoante minúscula.");
} else if (caractere > "A" && caractere <= "Z") {
    console.log("Esse caractere é uma consoante maiúscula.");
} else {
    console.log("Caractere inválido!")
};
