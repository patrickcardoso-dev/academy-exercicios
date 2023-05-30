const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const filtrarCidades = cidades.filter(cidade => cidade.length <= 8);
const resultado = filtrarCidades.join(", ");
console.log(resultado);