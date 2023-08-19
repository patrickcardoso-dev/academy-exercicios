const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];
const produtosProibidos = ["cerveja", "vodka"];

const temProdutoProibido = palavras.some(palavra => produtosProibidos.includes(palavra));

if (temProdutoProibido) {
    console.log("Revise sua lista, João. Possui bebida com venda proibida!")
} else {
    console.log("Tudo certo, vamos às compras!")
};
