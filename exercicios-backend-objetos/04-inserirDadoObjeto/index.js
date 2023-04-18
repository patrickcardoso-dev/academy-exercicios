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
]

for (let i = 0; i < usuarios.length; i++) {
    const maiorIdade = usuarios[i].idade > 17 ? true : false;
    usuarios[i]["maiorIdade"] = maiorIdade;
}    

console.log(usuarios)