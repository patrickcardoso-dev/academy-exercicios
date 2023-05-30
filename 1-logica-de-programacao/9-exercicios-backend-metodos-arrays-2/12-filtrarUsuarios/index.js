const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
  ];

  const filtrarProgramadores = pessoas.filter(pessoa => pessoa.idade > 20 && pessoa.profissao === "Programador");
  const filtrarJornalistas = pessoas.filter(pessoa => pessoa.idade > 30 && pessoa.profissao === "Jornalista");
  const filtrarJovens = pessoas.filter(pessoa => pessoa.idade < 30);

  console.log(filtrarProgramadores, filtrarJornalistas, filtrarJovens);