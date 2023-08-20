import { jogadores } from '../jogadores.js';

let indexJogador = 0;
export const jogadorDoTurno = (req, res) => {
    if (indexJogador === jogadores.length) {
        indexJogador = 0
    };

    res.send(`É a vez de ${jogadores[indexJogador++]} jogar!`);
};

export const removerJogador = (req, res) => {
    const i = Number(req.query.indice);

    if (i >= jogadores.length) {
        return res.send(`Não existe jogador no índice informado (${i}) para ser removido.`);
    };

    jogadores.splice(i, 1);
    return res.send(jogadores);
}

export const adicionarJogador = (req, res) => {
    const { nome, indice } = req.query;
    const i = Number(indice);

    const primeiraLetra = nome.slice(0, 1);
    const restanteNome = nome.slice(1);
    const nomeFormatado = primeiraLetra.toUpperCase() + restanteNome;

    if (!indice) {
        jogadores.push(nomeFormatado);
        return res.send(jogadores);
    };

    if (i >= jogadores.length) {
        return res.send(`O índice informado (${i}) não existe no array. Novo jogador não adicionado.`);
    };

    jogadores.splice(i, 0, nomeFormatado);
    return res.send(jogadores);
}