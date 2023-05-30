const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const validadorArrays = palavras.some(palavra => palavra.length > 5);

if (validadorArrays) {
    console.log("Existe palavra inválida.")
} else {
    console.log("Array válido.")
};