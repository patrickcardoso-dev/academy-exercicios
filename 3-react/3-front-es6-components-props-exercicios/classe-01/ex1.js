function sum(...soma) {
  return soma.reduce((acumulador, atual) => acumulador + atual);
}

console.log(sum(1, 3, 4, 5, 6, 7, 8, 9, 0, 5));

