//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

const descontoDebito = valorDoProduto * 0.1;
const descontoCredito = valorDoProduto * 0.05;
const descontoCheque = valorDoProduto * 0.03;

if (tipoDePagamento === "credito" ) {
    const valorFinal = (valorDoProduto - descontoCredito) / 100;
    console.log(`O valor a ser pago é de R$ ${valorFinal.toFixed(2)} reais.`);
} else if (tipoDePagamento === "cheque" ) {
    const valorFinal = (valorDoProduto - descontoCheque) / 100;
    console.log(`O valor a ser pago é de R$ ${valorFinal.toFixed(2)} reais.`);
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    const valorFinal = (valorDoProduto - descontoDebito) / 100;
    console.log(`O valor a ser pago é de R$ ${valorFinal.toFixed(2)} reais.`);
} else {
    console.log("Tipo de pagamento inválido.");
};