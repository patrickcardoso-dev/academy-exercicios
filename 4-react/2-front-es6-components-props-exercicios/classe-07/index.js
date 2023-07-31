function soma(a, b) {
    console.log(a + b)
}

soma(2, 3)

function duplicar(...numeros) {
    console.log(...numeros.map(numero => numero * 2))
}

duplicar(1, 2, 3, 4, 5)

function filtrar(...numeros) {
    console.log(...numeros.filter(numero => numero % 2 != 0)) 
}

filtrar(1, 2, 3, 4, 5)

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const novoArray = [...array1, ...array2];
console.log(novoArray)

const pessoa = { nome: "João", idade: 30, endereco: { rua: "Rua A", numero: 123 }}
const { nome, idade, endereco: {rua} } = pessoa
console.log(nome, idade, rua)

function imprimirDados({nome, idade}) {
    console.log(nome, idade)
}
imprimirDados(pessoa)

const array3 = [1, 2, 3, 4, 5];
const arrayCopiado = [...array3, 6];
console.log(arrayCopiado)

const [a, b, ...c] = array3;
console.log(a, b, c)