const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
const frutasInvertidas = frutas.reverse();
const frutasString = frutas.join();
console.log(frutasString);

frutasInvertidas.reverse()
const novasFrutas = frutasInvertidas.splice(0, 1);
frutasInvertidas.splice(frutasInvertidas.length - 1, 1, "Melão");
console.log(frutasInvertidas);
