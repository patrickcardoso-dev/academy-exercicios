import express from 'express';
import axios from 'axios';
import fs from 'fs/promises';

const app = express();

const instanciaAxios = axios.create({
	baseURL: 'https://companyenrichment.abstractapi.com/v1',
	params: {
		api_key: '7858860e5eac4c54a9956b22a9ed0add',
	},
})

app.use(express.json());

rotas.get('/empresas', async (req, res) => {
    const { dominioEmpresa } = req.query;

	try {
		const { data: empresa } = await instanciaAxios.get(
			`/?domain=${dominioEmpresa}`
		);

		if (empresa && empresa.name) {
			const dadosEmpresas = JSON.parse(
				await fs.readFile('./src/empresas.json')
			)

			dadosEmpresas.push(empresa)

			await fs.writeFile(
				'./src/empresas.json',
				JSON.stringify(dadosEmpresas, null, 2)
			)
		};

		return res.json(empresa);
	} catch (error) {
		console.log(error)
		return res.status(500).json({ mensagem: 'Erro interno do servidor' });
	}
});

app.listen(3000);