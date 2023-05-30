let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

const identificadorFormatado = identificador.padStart(6, "0");
const emailFormatado = email.trim();
const nomeFormatado = formatarNome(nome);

function formatarNome (nome) {
    const nomeSeparado = nome.split(" ");
    let nomeFormatado = "";

    for (let item of nomeSeparado) {
        let primeiraLetra = item.slice(0, 1);
        let restanteNome = item.slice(1);

        nomeFormatado += primeiraLetra.toUpperCase() + restanteNome + " ";
    }

    nomeFormatado = nomeFormatado.trim();
    return nomeFormatado;
};

console.log(identificadorFormatado);
console.log(nomeFormatado);
console.log(emailFormatado);
