const img = document.querySelector("img");
const h1 = document.querySelector("h1");
const span = document.querySelector("span");


async function getPokemon() {
    try {
       const response = await api.get("/pokemon/pikachu");
        const { sprites, name, height, weight } = response.data;

        img.src = sprites.other.dream_world.front_default;
        h1.innerText = name.toUpperCase();
        span.innerText = `A:${height}cm L:${weight}cm`;
       
    } catch (error) {
        console.log(error);
    }
};

getPokemon();