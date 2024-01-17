import { Aluno } from "./Aluno";
import { Usuario } from "./Usuario";

export class Professor extends Usuario {
    constructor(
        public nome: string,
        public email: string,
        public telefone: string,
        protected senha: string
    ) {
        super(nome, email, telefone, senha)
    }

    lancarNota(aluno: Aluno, nota: number) {
        aluno.setNotas = nota;
    }
}