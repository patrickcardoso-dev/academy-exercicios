export const autenticador = (req, res, next) => {
    const { senha } = req.query;

    if (!senha) {
        return res.status(401).json({ "menssagem": "Senha não informada." });
    }

    if (senha !== "cubos123") {
        return res.status(401).json({ "menssagem": "Senha incorreta." });
    }

    next();
};