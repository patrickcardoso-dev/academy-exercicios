const numeros = [3, 24, 1, 8, 11, 7, 15];

let maiorNumero = numeros[0];

for (let item of numeros) {
    if (item > maiorNumero) {
        maiorNumero = item;
    }
}

console.log(maiorNumero);