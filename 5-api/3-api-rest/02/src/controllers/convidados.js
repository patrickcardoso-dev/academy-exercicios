import { convidados } from '../data/bancodedados.js';

export const listarConvidados = (req, res) => {
    if (!req.query.nome) {
        return res.send(convidados)
    };

    const nome = req.query.nome;
    const convidadoBuscado = convidados.includes(nome);

    if (!convidadoBuscado) {
        return res.status(404).json({ "mensagem": "O convidado buscado não está presente na lista." })
    }

    return res.json({ "mensagem": "Convidado presente." })
};

export const adicionarConvidado = (req, res) => {

    const { nome } = req.body;

    const convidado = convidados.includes(nome);

    if (convidado) {
        return res.json({ "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." })
    }

    convidados.push(nome);
    
    return res.json( { "mensagem": "Convidado adicionado." });
};

export const removerConvidado = (req, res) => {
    const nome = req.query.nome;
    const convidado = convidados.includes(nome);

    if (!convidado) {
        return res.status(404).json({ "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." })
    }

    const index = convidados.indexOf(nome);
    convidados.splice(index, 1);

    return res.json({ "mensagem": "Convidado removido." })
};