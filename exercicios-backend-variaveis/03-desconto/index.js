const valorTenis = 129.99;
const saldo = 80.00;
const valorDesconto = valorTenis - saldo;

const desconto = (valorDesconto * 100) / valorTenis;
const resultado = desconto.toFixed(1);

const mensagem = `Para comprar o tênis de ${valorTenis} reais por ${saldo} reais, você precisa receber ${resultado}% de desconto.` 
console.log(mensagem);