import { livros } from '../data/bancodedados.js';

let idLivro = 3;

export const consultarLivros = (req, res) => {
    return res.send(livros);
};

export const consultarLivroPorId = (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    };

    const livro = livros.find(livro => livro.id === id);

    if (!livro) {
        return res.status(404).json({ mensagem: "Não existe livro para o ID informado" });
    };

    return res.json(livro);
};

export const adcionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo.trim()) {
        return res.status(400).json({ mensagem: "O campo titulo é obrigatório." });
    };

    if (!autor.trim()) {
        return res.status(400).json({ mensagem: "O campo autor é obrigatório." });
    };

    if (!ano) {
        return res.status(400).json({ mensagem: "O campo ano é obrigatório." });
    };

    if (!numPaginas) {
        return res.status(400).json({ mensagem: "O campo numPaginas é obrigatório." });
    };

    const novoLivro = {
        id: idLivro++,
        titulo,
        autor,
        ano,
        numPaginas
    };

    livros.push(novoLivro);
    
    return res.status(201).send();
};

export const substituirLivro = (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    };

    let livro = livros.find(livro => livro.id === id);

    if (!livro) {
        return res.status(404).json({ mensagem: "Não existe livro a ser substituído para o ID informado." });
    };

    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo.trim()) {
        return res.status(400).json({ mensagem: "O campo titulo é obrigatório." });
    };

    if (!autor.trim()) {
        return res.status(400).json({ mensagem: "O campo autor é obrigatório." });
    };

    if (!ano) {
        return res.status(400).json({ mensagem: "O campo ano é obrigatório." });
    };

    if (!numPaginas) {
        return res.status(400).json({ mensagem: "O campo numPaginas é obrigatório." });
    };

    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;
    livro.numPaginas = numPaginas;

    return res.json({ mensagem: "Livro substituído." });
};

export const alterarLivro = (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    };

    let livro = livros.find(livro => livro.id === id);

    if (!livro) {
        return res.status(404).json({ mensagem: "Não existe livro a ser alterado para o ID informado." });
    };

    const { titulo, autor, ano, numPaginas } = req.body;

    if (titulo) {
        livro.titulo = titulo;
    };

    if (autor) {
        livro.autor = autor;
    };

    if (ano) {
        livro.ano = ano;
    };

    if (numPaginas) {
        livro.numPaginas = numPaginas;
    };

    return res.json({ mensagem: "Livro alterado." });
};

export const removerLivro = (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O id informado não é um número válido." });
    };

    const indiceExclusao = livros.findIndex(livro => livro.id === id);

    if (indiceExclusao < 0) {
        return res.status(404).json({ mensagem: "Não existe livro a ser removido para o ID informado." });
    };

    livros.splice(indiceExclusao, 1)[0];

    return res.json({ mensagem: "Livro excluído." });
};