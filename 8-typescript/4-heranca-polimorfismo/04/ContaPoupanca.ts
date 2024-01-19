import { ContaBancaria } from "./ContaBancaria";
import { Cliente } from "./Cliente"

export class ContaPoupanca extends ContaBancaria {
   private taxaRendimento: number = 0.05;

    constructor(
        protected saldo: number,
        public numero: string,
        public agencia: string,
        protected senha: string,
        public cliente: Cliente
    ) {
        super(saldo, numero, agencia, senha, cliente);
    }

    depositar(valor: number): string {
        this.saldo += valor + (valor * this.taxaRendimento);
        return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`;
    }

    sacar(valor: number, senha: string): string {
        if (this.senha !== senha) {
            return "Senha inválida";
        }

        if (valor > this.saldo ) {
            return "Saldo insuficiente";
        }

        this.saldo -= valor;

        return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`;
    }
}