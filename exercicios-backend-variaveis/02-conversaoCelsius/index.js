const grauFahrenheit = 73;

const grauCelsius = (grauFahrenheit - 32) * 5/9;
const resultado = grauCelsius.toFixed(0);

const mensagem = `${grauFahrenheit} ºF correspondem a ${resultado} ºC.`
console.log(mensagem);