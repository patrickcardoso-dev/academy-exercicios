const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

encontrarCarros = (nomes, posicao) => {
   let carros = nomes.slice(posicao, posicao + 3);
   let listaCarros = carros.join(" - ");
   console.log(listaCarros);
};

encontrarCarros(nomes, posicao);

