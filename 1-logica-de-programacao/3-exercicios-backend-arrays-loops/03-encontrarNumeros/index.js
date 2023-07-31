const numeros = [54, 22, 14, 87, 10, 284];

let index;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        index = i;
    }
}

if (index >= 0) {
    console.log(`O índex do número 10 é ${index}.`);
} else if (!index) {
console.log(`O índex do número 10 é -1.`)
}