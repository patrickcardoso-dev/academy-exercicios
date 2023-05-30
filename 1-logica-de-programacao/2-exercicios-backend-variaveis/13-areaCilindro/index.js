const raioBase = 3;
const alturaCilindro = 1;

const areaCilindro = 2 * raioBase * (raioBase + alturaCilindro) + "pi";

const mensagem = `A área total de um cilindro cujo raio da base é ${raioBase} e a altura é ${alturaCilindro} é de ${areaCilindro}.`;

console.log(mensagem);