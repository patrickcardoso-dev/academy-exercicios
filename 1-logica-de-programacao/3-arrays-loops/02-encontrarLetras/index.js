const letras = ["A", "a", "B", "C", "E", "e"];

let numeroLetras = 0;

for (let item of letras) {
    if (item === "E" || item === "e") {
        numeroLetras++;
    }
}

if (numeroLetras === 0) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`)
} else {
    console.log(`Foram encontradas ${numeroLetras} letras "E" ou "e".`)
}