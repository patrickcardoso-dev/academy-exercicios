import { Usuario } from "./Usuario";

export class Aluno extends Usuario {
    constructor(
        public nome: string,
        public email: string,
        public telefone: string,
        protected senha: string,
        private notas: number[]
    ) {
        super(nome, email, telefone, senha)
    }

    set setNotas(nota: number) {
        this.notas.push(nota)
    }

    obterMedia(): number {
        let numeroNotas = 0
        let total = 0

        for (const nota of this.notas) {
            total += nota
            numeroNotas++
        }

        return total / numeroNotas
    }
}