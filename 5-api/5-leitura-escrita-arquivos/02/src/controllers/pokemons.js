const { listarPokemons, detalharPokemon } = require('utils-playground');

export const apresentarPokemons = async (req, res) => {
    const { pagina } = req.query;

    try {
        const listaPokemons = await listarPokemons(pagina ?? 1);

        return res.json(listaPokemons);
    } catch (error) {
        return res.json(`Erro: ${error.message}`);
    }
};

export const buscarPokemon = async (req, res) => {
    const { idOuNome } = req.params;

    try {
        const pokemon = await detalharPokemon(idOuNome);

        const { id, name, height, weight, base_experience, forms, abilities, species } = pokemon;

        return res.json({ id, name, height, weight, base_experience, forms, abilities, species });
    } catch (error) {
        return res.json(`Erro: ${error.message}`);
    }
};