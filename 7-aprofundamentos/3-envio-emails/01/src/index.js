const express = require('express');
const knex = require('./connections/postgres');
const transportador = require('./connections/smtp');
const compiladorHtml = require('../utils/compiladorHtml')

const app = express();

app.use(express.json());

app.post('/emails', async (req, res) => {
    const { nome, email } = req.body;

    try {
        await knex('emails').insert({nome, email});
        
        return res.status(201).json({ mensagem: 'Cadastro efeituado com sucesso' });
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
});

app.post('/newsletter', async (req, res) => {
    const { texto } = req.body;

    try {
        const emails = await knex('emails');

        for (const email of emails) {
            const htmlNewsletter = await compiladorHtml(
				'./src/templates/newsletter.html',
				{
					usuario: email.nome,
					texto: texto,
				}
			);

            transportador.sendMail({
                from: 'Patrick Cardoso <dev.patrickcardoso@gmail.com>',
                to: `${email.nome} <${email.email}>`,
                subject: 'Newsletter',
                html: htmlNewsletter,
            })
        }
        
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
});

app.listen(3000);