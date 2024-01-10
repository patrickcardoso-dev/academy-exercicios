const fs = require("fs");

const readFile = (): unknown => {
    return JSON.parse(fs.readFileSync("./bd.json"));
}

const writeFile = (data: any): void => {
    fs.writeFileSync("./bd.json", JSON.stringify(data));
}

type Endereco = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
};

type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    profissao?: string,
    endereco: Endereco | null
};

const registerUser = (data: Usuario): Usuario => {
    const bd = readFile() as Usuario[];

    bd.push(data);

    writeFile(bd);

    return data;
};

const listUsers = (profissao?: string): Usuario[] => {
    const bd = readFile() as Usuario[];

    const users = bd.filter(user => {
        if (profissao) {
            return user.profissao === profissao;
        }

        return user;
    });

    return users; 
}

const userDetails = (cpf: string): Usuario => {
    const bd = readFile() as Usuario[];
    const user = bd.find(user => user.cpf === cpf);

    if (!user) {
        throw new Error("Usuário não encontrado")
    };

    return user;
}

const updateUser = (cpf: string, data: Usuario): Usuario => {
    const bd = readFile() as Usuario[];
    const user = bd.find(user => user.cpf === cpf);

    if (!user) {
        throw new Error("Usuário não encontrado")
    };

    Object.assign(user, data);

    writeFile(bd);

    return data;
}

const deleteUser = (cpf: string): Usuario => {
    const bd = readFile() as Usuario[];
    const user = bd.find(user => user.cpf === cpf);

    if (!user) {
        throw new Error("Usuário não encontrado")
    };

    const newBd = bd.filter(user => user.cpf !== cpf); 

    writeFile(newBd);

    return user;
}