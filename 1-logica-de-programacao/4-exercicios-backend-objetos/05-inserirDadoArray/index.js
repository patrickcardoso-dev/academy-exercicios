const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}

const aula1 = {
    identificador: 01,
    nomeAula: "Introdução a programação"
}

const aula2 = {
    identificador: 02,
    nomeAula: "Variáveis"
}

const aula3 = {
    identificador: 03,
    nomeAula: "Condicionais"
}

const aula4 = {
    identificador: 04,
    nomeAula: "Arrays"
}

curso["aulas"].push(aula1, aula2, aula3, aula4);

console.log(curso);
