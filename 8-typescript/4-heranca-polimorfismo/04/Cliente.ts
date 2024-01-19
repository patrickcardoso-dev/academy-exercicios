export type Endereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string
}

export class Cliente {
    public dataCadastro: Date = new Date();
    public endereco: Endereco[] = [];

    constructor(
        public nome: string,
        public email: string,
        public cpf: string
    ) { }

    adicionarEndereco(endereco: Endereco): void {
        this.endereco.push(endereco);
    }
}