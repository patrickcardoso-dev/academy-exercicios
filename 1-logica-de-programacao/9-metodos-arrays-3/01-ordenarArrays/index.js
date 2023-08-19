const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const numerosCrescente = numeros.sort((a, b) => a - b);
console.log(numerosCrescente);

const numerosDecrescente = numeros.sort((a, b) => b - a);
console.log(numerosDecrescente);

const numerosUnicode = numeros.sort();
console.log(numerosUnicode);

const frutasCrescente = frutas.sort((a, b) => a.localeCompare(b));
console.log(frutasCrescente);

const frutasDecrescente = frutas.sort((a, b) => b.localeCompare(a));
console.log(frutasDecrescente);

const frutasTamanho = frutas.sort((a,b) => a.length - b.length);
console.log(frutasTamanho);



