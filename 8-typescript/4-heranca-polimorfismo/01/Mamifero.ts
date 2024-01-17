export class Mamifero {
    constructor(
        public nome: string,
        public peso: number,
        public altura: number,
        public comprimento: number
    ) {}

    comer(): string {
        return "Animal comendo"
    }
}