class Calculadora {
    constructor(
        private numeroA: number,
        private numeroB: number
    ) {}

    somar(): number {
        return this.numeroA + this.numeroB;
    }

    subtrair(): number {
        return this.numeroA - this.numeroB;
    }

    multiplicar(): number {
        return this.numeroA * this.numeroB;
    }

    dividir(): number {
        return this.numeroA / this.numeroB;
    }
}