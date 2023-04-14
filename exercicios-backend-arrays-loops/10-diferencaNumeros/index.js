const numeros = [8, 11, 4, 1];

let maiorDiferença = 0;

for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        const diferença = numeros[i] - numeros[j];
        if (diferença > 0) {
            if (diferença > maiorDiferença) {
                maiorDiferença = diferença;
            }
        }
    }
}

console.log(maiorDiferença);
