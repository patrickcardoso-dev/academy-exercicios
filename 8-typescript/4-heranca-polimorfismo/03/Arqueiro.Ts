import { Personagem } from "./Personagem";

export class Arqueiro extends Personagem {
    public flechas: number = 5;

    constructor( public nome: string ) {
        super(nome)
    }

    lancarFlechas(): string {
        if (this.flechas <= 0) {
            return "Flecha indisponível";
        }

        this.flechas -= 1;
        return "Flecha lançada";
    }

    construirFlechas() {
        this.flechas += 1;
    }
}