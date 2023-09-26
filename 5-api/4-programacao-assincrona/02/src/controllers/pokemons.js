const { listarPokemons, detalharPokemon } = require('utils-playground');

export const apresentarPokemons = async (req, res) => {
    const { pagina } = req.query;

    const listaPokemons = await listarPokemons(pagina ?? 1);

    return res.json(listaPokemons);
};

export const buscarPokemon = async (req, res) => {
    const { idOuNome } = req.params;

    const pokemon = await detalharPokemon(idOuNome);

    const { id, name, height, weight, base_experience, forms, abilities, species } = pokemon;

    return res.json({ id, name, height, weight, base_experience, forms, abilities, species });
};