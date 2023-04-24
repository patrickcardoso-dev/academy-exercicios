const numeroCartao = '1111222233334444';

const cartaoFormatado = formatarNumeroCartao(numeroCartao);

function formatarNumeroCartao () {
    let numeroCartaoFormatado = "";

    for (let item of numeroCartao) {
        if (numeroCartao.indexOf(item) > 3 && numeroCartao.indexOf(item) < 12) {
            numeroCartaoFormatado += "*";
        } else {
            numeroCartaoFormatado += item;
        }
    };
    return numeroCartaoFormatado;
};

console.log(cartaoFormatado);
