const classA = ["Daniel", "Guido", "Léo", "Vitor", "Ruliana", "Diego", "José"];
const classB = ["Marcos", "Maria", "Juliana", "Cristina", "Paula"];
const classC = ["Marcela", "Pedro", "João", "Jorge", "Carlos", "Henrique"];

const [zero, um, , , ...restante] = classC;
const allClasses = [...classA, ...classB, zero, um, ...restante];

console.log(allClasses);


