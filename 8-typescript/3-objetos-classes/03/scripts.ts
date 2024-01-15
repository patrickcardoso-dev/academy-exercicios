type Produto = {
    descricao: string,
    valor: number,
    quantidade: number
}

class Fatura {
    private transacoes: Produto[] = [];

    constructor(private cliente: string) {}

    registrarProduto(produto: Produto) {
        this.transacoes.push(produto)
    }

    fecharFatura(): string {
        let fatura = `Cliente: ${this.cliente}\n\n`;
        let total = 0;
        
        for (const produto of this.transacoes) {
            total += produto.quantidade * produto.valor / 100;
            fatura += `${produto.quantidade} - ${produto.descricao} (R$ ${(produto.valor / 100).toFixed(2)}) = R$ ${(produto.quantidade * produto.valor / 100).toFixed(2)}\n`;
        }

        fatura += `\n\nTotal: R$ ${total.toFixed(2)}`;

        return fatura;
    }
}
