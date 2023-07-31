const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

const petBuscado = "Salsicha";

const encontrarDono = (usuarios, petBuscado) => {
    let dono = "";
    let encontrado = false;
    
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].pets.includes(petBuscado)) {
            dono = usuarios[i].nome;
            encontrado = true;
        };
    };

    if (encontrado) {
        console.log(`O(a) dono(a) do(a) ${petBuscado} é o(a) ${dono}.`)
    } else {
        console.log(`Que pena ${petBuscado}, não encontramos seu(ua) dono(a).`)
    }
};

encontrarDono(usuarios, petBuscado);