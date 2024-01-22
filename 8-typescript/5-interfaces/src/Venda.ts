import { Carrinho } from "./Carrinho";

export abstract class Venda {
    carrinho: Carrinho; 
    total: number;
    
    constructor(carrinho: Carrinho) {
        this.carrinho = carrinho;
        this.total = this.calcularTotal();
    }
    
    abstract finalizarPedido(): string
    
    private calcularTotal(): number {
        let total = 0;
        
        for (const produto of this.carrinho.resumo()) {
            total += produto.valor * produto.quantidade;
        }        
        
        return total;
    }
}