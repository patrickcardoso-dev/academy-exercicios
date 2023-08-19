const infectadosInicial = 1000;
const taxaTransmissão = 4;
const tempo = 7;
const tempoPercorrido = tempo / 7;

const infectados = infectadosInicial * (taxaTransmissão) ** tempoPercorrido;

const mensagem = `Ao final de ${tempo} dias sob uma taxa de transmissão de ${taxaTransmissão} pessoas, uma população inicial de ${infectadosInicial} pessoas infectarão ${infectados} pessoas.`;
console.log(mensagem);