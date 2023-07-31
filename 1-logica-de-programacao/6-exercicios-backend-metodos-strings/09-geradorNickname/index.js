const nome = 'Guido Cerqueira';

function gerarNickname () {
    let nomeFormatado = nome.toLowerCase();

    while (nomeFormatado.includes(" ")) {
        nomeFormatado = nomeFormatado.replace(" ", "");
    };
    
    let nickname = nomeFormatado.slice(0, 12);

    nickname = nickname.padStart(13, "@");

    return nickname;
}

console.log(gerarNickname(nome));