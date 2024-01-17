export class Usuario {
    constructor(
        public nome: string,
        public email: string,
        public telefone: string,
        protected senha: string
    ) {}

    autenticar(senha: string): string {
        if (this.senha === senha) {
            return "Usuário logado"
        }
        return "Senha inválida"
    }
}