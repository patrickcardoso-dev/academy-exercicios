const numeroLados = 6;

const somaAngulosInternos = (numeroLados - 2) * 180;
const valorAngulos = somaAngulosInternos / numeroLados;

const mensagem = `Um polígono com ${numeroLados} lados tem ângulos de ${valorAngulos} graus, que somados totalizam ${somaAngulosInternos} graus.`;
console.log(mensagem);