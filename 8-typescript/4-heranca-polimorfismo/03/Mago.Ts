import { Personagem } from "./Personagem";

export class Mago extends Personagem {
    public magia: number = 5;

    constructor( public nome: string ) {
        super(nome)
    }

    usarMagia(): string {
        if (this.magia <= 0) {
            return "Magia indisponível";
        }

        this.magia -= 1;
        return "Magia usada";
    }

    criarMagia() {
        this.magia += 1;
    }
}