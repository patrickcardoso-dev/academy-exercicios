import { Cliente } from "./Cliente"

export abstract class ContaBancaria {
    constructor(
        protected saldo: number,
        public numero: string,
        public agencia: string,
        protected senha: string,
        public cliente: Cliente
    ) {}    

    consultarSaldo(senha: string): string {
        if (this.senha === senha) {
            return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`;
        }

        return "Senha inválida"
    }

    abstract depositar(valor: number): string;

    abstract sacar(valor: number, senha: string): string;
}