const montante = 90000;
const capitalInicial = 60000;
const meses = 24;

const taxaJuros = ((montante / capitalInicial) ** (1 / meses) -1) * 100;
const resultado = taxaJuros.toFixed(2);

const mensagem = `O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${resultado} % pois, após ${meses} meses, você teve que pagar ${montante} reais.`;
console.log(mensagem);