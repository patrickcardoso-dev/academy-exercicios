const x1 = 1, x2 = 1, y1 = 1, y2 = 4;
const resultadoX = (x2 - x1) ** 2;
const resultadoY = (y2 - y1) ** 2;

const distancia = Math.sqrt(resultadoX + resultadoY);

const mensagem = `A distância entre os dois pontos dados é de ${distancia}.`
console.log(mensagem);

