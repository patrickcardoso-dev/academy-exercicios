const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
  ];

  const filtrarIniciais = nomes.filter(nome => nome[0] === "A" || nome[0] === "a");

console.log(filtrarIniciais);
