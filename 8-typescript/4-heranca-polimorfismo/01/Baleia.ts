import { Mamifero } from "./Mamifero";

export class Baleia extends Mamifero {
    constructor(
        public nome: string,
        public peso: number,
        public altura: number,
        public comprimento: number
    ) {
        super( nome, peso, altura, comprimento)
    }

    nadar(): string {
        return "Baleia nadando"
    }
}