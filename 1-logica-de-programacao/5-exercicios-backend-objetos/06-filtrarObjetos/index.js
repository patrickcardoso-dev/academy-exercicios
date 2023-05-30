const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

const jovens = [];
const adultos = [];

for (let i = 0; i < usuarios.length; i++) {
    const {nome, idade} = usuarios[i];
    if (usuarios[i].idade >= 18) {
        adultos.push({nome, idade})
    } else {
        jovens.push({nome, idade});
    }
}

console.log(jovens, adultos);


