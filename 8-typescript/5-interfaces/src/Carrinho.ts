interface IProduto {
    id: number;
    descricao: string;
    categoria: string;
    valor: number, 
    quantidade: number
}

export class Carrinho {
    private produtos: IProduto[];

    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto: IProduto): void {
        this.produtos.push(produto);
    }

    removerProduto(idProduto: number): string {
        const indice = this.produtos.findIndex(produto => produto.id === idProduto);

        if (indice === -1) {
            return `Produto não encontrado`
        }

        this.produtos.splice(indice, 1);

        return `Produto removido`
    }

    alterarQuantidadeProduto(idProduto: number, quantidade: number): string {
        const produto = this.produtos.find(produto => produto.id === idProduto);

        if (!produto) {
            return `Produto não encontrado`
        }

        produto.quantidade = quantidade;

        return `Quantidade de ${produto.descricao} alterado para ${produto.quantidade}.`;
    }

    resumo(): IProduto[] {
        return this.produtos;
    }
}