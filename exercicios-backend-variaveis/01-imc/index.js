const peso = 72;
const altura = 1.74;

const imc = peso / (altura * altura);
const resultado = imc.toFixed(2);

const mensagem = `Seu IMC é de ${resultado}.`
console.log(mensagem);
