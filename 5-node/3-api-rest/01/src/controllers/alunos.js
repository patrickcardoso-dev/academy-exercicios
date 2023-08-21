import { alunos } from '../data/bancodedados.js';

let idAluno = 1;

export const listarAlunos = (req, res) => {
    return res.send(alunos)
};

export const listarAlunoPorId = (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O id informado não é um número válido." });
    };

    const aluno = alunos.find(aluno => aluno.id === id);

    if (!aluno) {
        return res.status(404).json({ mensagem: "Aluno não encontrado." });
    };

    return res.json(aluno);
};

export const adicionarAluno = (req, res) => {

    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome.trim()) {
        return res.status(400).json({ mensagem: "O campo nome é obrigatório." });
    };

    if (!sobrenome.trim()) {
        return res.status(400).json({ mensagem: "O campo sobrenome é obrigatório." });
    };

    if (!idade) {
        return res.status(400).json({ mensagem: "O campo idade é obrigatório." });
    };

    if (!curso.trim()) {
        return res.status(400).json({ mensagem: "O campo curso é obrigatório." });
    };

    if (idade < 18) {
        return res.status(400).json({ mensagem: "O aluno deve ter 18 anos no mínimo." });
    };

    const novoAluno = {
        id: idAluno++,
        nome,
        sobrenome,
        idade,
        curso
    };

    alunos.push(novoAluno);
    
    return res.status(201).send();
};

export const removerAluno = (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O id informado não é um número válido." });
    };

    const indiceExclusao = alunos.findIndex(aluno => aluno.id === id);

    if (indiceExclusao < 0) {
        return res.status(404).json({ mensagem: "Aluno não encontrado." });
    };

    const alunoExcluido = alunos.splice(indiceExclusao, 1)[0];

    return res.json(alunoExcluido)
};