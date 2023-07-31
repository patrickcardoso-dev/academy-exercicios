const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
  ];

const busca = 00222444;

const buscarEndereco = enderecos.find(endereco => endereco.cep === busca);
const resultado = buscarEndereco.rua;

console.log(resultado);