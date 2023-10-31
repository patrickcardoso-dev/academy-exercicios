const express = require('express');
const pool = require('./connection');

const app = express();
app.use(express.json());

app.post('/autor', async (req, res) => {
    const { nome, idade } = req.body;

    if (!nome) {
		return res.status(400).json({ mensagem: 'O campo nome é obrigatório' });
	}

    try {
        const query = 'INSERT INTO autores (nome, idade) VALUES ($1, $2) RETURNING *';
        const { rows } = await pool.query(query, [nome, idade]);

        return res.status(201).json(rows[0])
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

app.get('/autor/:id', async (req, res) => {
    const { id } = req.params;

    if (!id) {
		return res.status(400).json({ mensagem: 'Informe um id para busca' });
	}

    try {
        const query = `
        select a.id, a.nome, a.idade, l.id as livro_id, l.nome as livro_nome,
        l.genero as livro_genero, l.editora as livro_editora, 
        l.data_publicacao as livro_data_publicacao 
        from autores a left join livros l 
        on a.id = l.autor_id where a.id = $1`;
        const {rows, rowCount} = await pool.query(query, [id]);

        if (rowCount === 0) {
            return res.status(404).json({ mensagem: 'Autor não encontrado' });
        }

        const livros = rows.map(livro => {
			return {
				id: livro.livro_id,
				nome: livro.livro_nome,
				genero: livro.livro_genero,
				editora: livro.livro_editora,
				data_publicacao: livro.livro_data_publicacao,
			}
		})

		const autor = {
			id: rows[0].id,
			nome: rows[0].nome,
			idade: rows[0].idade,
			livros,
		}

        return res.status(200).json(autor);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

app.post('/autor/:id/livro', async (req, res) => {
    const { id } = req.params;
    const { nome, genero, editora, data_publicacao } = req.body;

    if (!nome) {
		return res.status(400).json({ mensagem: 'O campo nome é obrigatório' });
	}

    try {
        const queryAutor = 'SELECT * FROM autores WHERE id = $1';
        const {rows, rowCount} = await pool.query(queryAutor, [id]);

        if (rowCount === 0) {
            return res.status(404).json({ mensagem: 'Autor não encontrado' });
        }
        const autor = rows[0];

        const queryLivro = 'INSERT INTO livros (nome, genero, editora, data_publicacao, autor_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const livro = await pool.query(queryLivro, [nome, genero, editora, data_publicacao, autor.id]);

        return res.status(201).json(livro.rows[0]);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

app.get('/livro', async (req, res) => {
    try {
		const query = `
            select l.id, l.nome, l.genero, l.editora, l.data_publicacao,
            l.autor_id, a.nome as autor_nome, a.idade as autor_idade 
            from livros l left join autores a 
            on l.autor_id = a.id
        `

		const { rows } = await pool.query(query)

		const livros = rows.map(livro => {
			const { autor_id, autor_nome, autor_idade, ...dadosLivro } = livro
			return {
				...dadosLivro,
				autor: {
					id: autor_id,
					nome: autor_nome,
					idade: autor_idade,
				},
			}
		})

		return res.status(200).json(livros)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

app.listen(3000);