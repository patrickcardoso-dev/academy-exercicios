export class Personagem {
    public velocidade: number = 0;

    constructor(
        public nome: string,
    ) { }

    andar() {
        this.velocidade += 1
    }

    parar() {
        this.velocidade = 0
    }
}