import { Mamifero } from "./Mamifero";

export class Gato extends Mamifero {
    constructor(
        public nome: string,
        public peso: number,
        public altura: number,
        public comprimento: number
    ) {
        super( nome, peso, altura, comprimento)
    }

    miar(): string {
        return "Gato miando"
    }

    andar(): string {
        return "Animal andando"
    }
}