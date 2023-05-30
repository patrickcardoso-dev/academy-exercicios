const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

let menorValor = [];

if (arrayA.length === arrayB.length) {
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] < arrayB[i]) {
            menorValor.push(arrayA[i]);
        } else {
            menorValor.push(arrayB[i]);
        }
    }
}

console.log(menorValor);