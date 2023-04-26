const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const frutasOrdenadas = frutas.map(fruta => {
    let indice = frutas.findIndex(elementoAtual => elementoAtual === fruta);
    fruta = fruta.toLowerCase();
    let primeiraLetra = fruta.slice(0, 1);
    let restanteNome = fruta.slice(1);
    let nomeFormatado = primeiraLetra.toUpperCase() + restanteNome;
    return `${indice} - ${nomeFormatado}`;
});

console.log(frutasOrdenadas)