type User = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type UserWithoutRg = Omit<User, "rg">;
type UserRequired = Required<UserWithoutRg>;

const cadastrarUsuário = (info: UserRequired): UserRequired => {
    return info;
}