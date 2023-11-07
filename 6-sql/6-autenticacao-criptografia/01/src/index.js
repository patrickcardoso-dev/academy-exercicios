const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jwt');
const senhaJwt = require('../senhaJwt')
const pool = require('./connection');
const verificarLogin = require('./verificarLogin');

const app = express();
app.use(express.json());

app.post('/autor', async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome) {
		return res.status(400).json({ mensagem: 'O campo nome é obrigatório' });
	}

    if (!email) {
		return res.status(400).json({ mensagem: 'O campo nome é obrigatório' });
	}

    if (!senha) {
		return res.status(400).json({ mensagem: 'O campo nome é obrigatório' });
	}

    try {
		const emailCadastrado = await pool.query('select * from usuarios where email = $1',	[email]);

		if (emailCadastrado.rowCount > 0) {
			return res.status(400).json({ mensagem: 'Email já cadastrado' });
		}

        const senhaCriptografada = await bcrypt.hash(senha, 10);
    
        const query = 'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *';
        const { rows } = await pool.query(query, [nome, email, senhaCriptografada]);

        const { senha: _, ...usuario } = rows[0]

        return res.status(201).json(usuario)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});
app.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
		const usuario = await pool.query(
			'select * from usuarios where email = $1',
			[email]
		)

		if (usuario.rowCount < 1) {
			return res.status(404).json({ mensagem: 'Email ou senha invalida' })
		}

		const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha)

		if (!senhaValida) {
			return res.status(400).json({ mensagem: 'Email ou senha invalida' })
		}

        const token = jwt.sign({ id: usuario.rows[0].id }, senhaJwt, {
			expiresIn: '8h',
		})

		const { senha: _, ...usuarioLogado } = usuario.rows[0]

		return res.json({ usuario: usuarioLogado, token })
    } catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' });
	}
});

rotas.post('/pokemon', verificarLogin, async (req, res) => {
	const { nome, apelido, habilidades, imagem } = req.body

	if (!nome) {
		return res.status(400).json({ mensagem: 'O campo nome é obrigatório' })
	}

	if (!habilidades) {
		return res
			.status(400)
			.json({ mensagem: 'O campo habilidades é obrigatório' })
	}

	try {
		const query = `
            insert into pokemons (usuario_id, nome, apelido, habilidades, imagem)
            values ($1, $2, $3, $4, $5) returning *
        `
		const params = [req.usuario.id, nome, apelido, habilidades, imagem]

		const { rows } = await pool.query(query, params)

		return res.status(201).json(rows[0])
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
});
rotas.patch('/pokemon/:id', verificarLogin, async (req, res) => {
	const { apelido } = req.body
	const { id } = req.params

	try {
		const { rowCount } = await pool.query(
			'select * from pokemons where id = $1 and usuario_id = $2',
			[id, req.usuario.id]
		)

		if (rowCount === 0) {
			return res.status(404).json({ mensagem: 'Pokemon não existe' })
		}

		const queryAtualizaPokemon =
			'update pokemons set apelido = $1 where id = $2'

		await pool.query(queryAtualizaPokemon, [apelido, id])

		return res.status(204).send()
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
});
rotas.get('/pokemon', verificarLogin, async (req, res) => {
	try {
		const { rows: pokemons } = await pool.query(
			'select id, nome, habilidades, apelido, imagem from pokemons where usuario_id = $1',
			[req.usuario.id]
		)

		for (const pokemon of pokemons) {
			pokemon.habilidades = pokemon.habilidades.split(', ')
			pokemon.usuario = req.usuario.nome
		}

		return res.json(pokemons)
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
});
rotas.get('/pokemon/:id', verificarLogin, async (req, res) => {
	const { id } = req.params

	try {
		const { rows, rowCount } = await pool.query(
			'select  id, nome, habilidades, apelido, imagem from pokemons where id = $1 and usuario_id = $2',
			[id, req.usuario.id]
		)

		if (rowCount === 0) {
			return res.status(404).json({ mensagem: 'Pokemon não existe' })
		}

		const pokemon = rows[0]

		pokemon.habilidades = pokemon.habilidades.split(', ')
		pokemon.usuario = req.usuario.nome

		return res.json(pokemon)
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
});
rotas.delete('/pokemon/:id', verificarLogin, async (req, res) => {
	const { id } = req.params

	try {
		const { rows, rowCount } = await pool.query(
			'select  id, nome, habilidades, apelido, imagem from pokemons where id = $1 and usuario_id = $2',
			[id, req.usuario.id]
		)

		if (rowCount === 0) {
			return res.status(404).json({ mensagem: 'Pokemon não existe' })
		}

		await pool.query('delete from pokemons where id = $1', [id])

		return res.status(204).send()
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
});

app.listen(3000);