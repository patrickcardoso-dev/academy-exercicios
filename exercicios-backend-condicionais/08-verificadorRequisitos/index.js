const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade >= 12 && idade <= 65 && possuiPatologia === false && altura >= 150) {
    if (idade < 18 || ehEstudante === true) {
        console.log("O ingresso custa 10,00 reais.")
    } else {
        console.log("O ingresso custa 20,00 reais.")
    }
} else {
    console.log("Acesso negado. Você não pode entrar!.")
}