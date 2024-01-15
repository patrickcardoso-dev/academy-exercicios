class Lampada {
    private estado: boolean = false;

    constructor(
        private potencia: number
    ) {}

    ligar() {
        this.estado = true;
    }

    desligar() {
        this.estado = false;
    }

    medirPotencia(): number {
        return this.potencia;
    }

    verificarEstado(): string {
        if (this.estado) {
            return "Ligado"
        }

        return "Desligado"
    }
}