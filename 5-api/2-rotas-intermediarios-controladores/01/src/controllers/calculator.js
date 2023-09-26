const soma = (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = Number(num1) + Number(num2);
    return res.send(String(resultado))
};

const subtracao = (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = Number(num1) - Number(num2);
    return res.send(String(resultado)) 
};

const multiplicacao = (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = Number(num1) * Number(num2);
    return res.send(String(resultado))
};

const divisao = (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = Number(num1) / Number(num2);
    return res.send(String(resultado))
};

export { soma, subtracao, multiplicacao, divisao }