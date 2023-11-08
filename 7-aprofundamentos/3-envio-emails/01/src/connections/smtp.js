const nodemailer = require('nodemailer');

const transportador = nodemailer.createTransport({
	host: 'smtp.sendgrid.net',
	port: 465,
	auth: {
		user: 'apikey',
		pass: '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',
	},
});

module.exports = transportador;