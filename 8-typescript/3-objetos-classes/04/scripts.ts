class Pessoa {
    constructor(
        private nome: string,
        private idade: string,
        private nomePai: string,
        private nomeMãe: string,
    ) {}

    irmaos(pessoa: Pessoa): boolean {
        return pessoa.nomePai === this.nomePai || pessoa.nomeMãe === this.nomeMãe;
    }

    maisVelha(pessoa: Pessoa): boolean {
        return pessoa.idade > this.idade;
    }
}