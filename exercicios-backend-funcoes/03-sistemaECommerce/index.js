const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    calcularItensTotais: function () {
        let itensTotais = 0;
        for (let item of this.produtos) {
            itensTotais += item.qtd;
        ;}
        return itensTotais;
    },
    calcularPrecoTotal: function () {
        let precoTotal = 0;
        for (let item of this.produtos) {
            precoTotal += item.precoUnit * item.qtd;
        ;}
        return precoTotal;
    },
    descontoPorNumeroDeItens: function () {
        let descontoItens;

        if (this.calcularItensTotais() >= 4) {
            let menorValor = this.produtos[0].precoUnit;
            for (let i = 0; i <this.produtos.length; i++) {
                if (this.produtos[i].precoUnit < menorValor) {
                    menorValor = this.produtos[i].precoUnit;
                };
            }; descontoItens = menorValor;
        } else {
            descontoItens = null;
        }
        return descontoItens;
    },
    descontoPorValorDosItens: function () {
        let descontoPreco;

        if (this.calcularPrecoTotal() > 10000) {
            descontoPreco = this.calcularPrecoTotal() * 0.1;
        } else {
            descontoPreco = null;
        }
        return descontoPreco;
    },
    calcularDesconto: function () {
        const descontoPorNumeroDeItens = this.descontoPorNumeroDeItens();
        const descontoPorValorDosItens = this.descontoPorValorDosItens();

        if (descontoPorNumeroDeItens && descontoPorValorDosItens) {
            return descontoPorNumeroDeItens > descontoPorValorDosItens ? descontoPorNumeroDeItens : descontoPorValorDosItens;
        }

        if (descontoPorNumeroDeItens) {
            return descontoPorNumeroDeItens
        }

        if (descontoPorValorDosItens) {
            return descontoPorValorDosItens
        }

        return 0;
    },
    addProduto: function (produto) {
        let itemNovo = false;
        for (let item of this.produtos) {
            if (item.id === produto.id) {
            item.qtd += produto.qtd;
            itemNovo = true;
            };
        };
    
        if (!itemNovo) {
            this.produtos.push(produto);
        };
    },
    imprimirResumoCarrinho: function () {
        const valorFinal = this.calcularPrecoTotal() - this.calcularDesconto();

        console.log(`Cliente: ${this.nomeDoCliente}
        Total de itens: ${this.calcularItensTotais()} itens
        Total a pagar: R$ ${(valorFinal/100).toFixed(2)}`);  
    },
    imprimirCarrinhoDetalhado: function () {
        const valorFinal = this.calcularPrecoTotal() - this.calcularDesconto();

        let itensString = "";
        for (let i = 0; i < carrinho.produtos.length; i++) {
            itensString += `Item ${this.produtos[i].id} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${(this.produtos[i].precoUnit/100).toFixed(2)}
        `;
        };

        console.log(`Cliente: ${this.nomeDoCliente}
    
        ${itensString}

        Total de itens: ${this.calcularItensTotais()} itens
        Total a pagar: R$ ${(valorFinal/100).toFixed(2)}`);
        }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);

carrinho.imprimirCarrinhoDetalhado();
