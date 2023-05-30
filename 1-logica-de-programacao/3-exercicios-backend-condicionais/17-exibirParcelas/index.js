//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorPagoCentavos = valorPago * 100;
const valorParcela = valorDoProduto / quantidadeDoParcelamento;
const parcelasPagas = valorPagoCentavos / valorParcela;
const parcelasRestantes = quantidadeDoParcelamento - parcelasPagas;

if (valorPagoCentavos < valorDoProduto) {
    console.log(`Restam ${parcelasRestantes} parcelas de R$ ${valorParcela/100} reais.`);
} else if (valorPagoCentavos === valorDoProduto || parcelasRestantes === 0 || parcelasPagas === quantidadeDoParcelamento) {
    console.log(`Todas as ${quantidadeDoParcelamento} parcelas já foram pagas.`);
};