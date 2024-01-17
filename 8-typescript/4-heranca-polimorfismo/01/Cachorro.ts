import { Mamifero } from "./Mamifero";

export class Cachorro extends Mamifero {
    constructor(
        public nome: string,
        public peso: number,
        public altura: number,
        public comprimento: number
    ) {
        super( nome, peso, altura, comprimento)
    }

    latir(): string {
        return "Cachorro latindo"
    }

    andar(): string {
        return "Animal andando"
    }
}