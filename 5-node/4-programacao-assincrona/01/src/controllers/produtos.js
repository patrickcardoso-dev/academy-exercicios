import { produtos } from '../data/produtos.js';
import { getStateFromZipcode } from 'utils-playground';

export const listarProdutos = async (req, res) => {
    return res.send(produtos);
};

export const listarProdutoPorId = async (req, res) => {
    const idProduto = Number(req.params.idProduto);

    if (isNaN(idProduto)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    };

    const produto = produtos.find(produto => produto.id === idProduto);

    if (!produto) {
        return res.status(404).json({ mensagem: "Não existe produto para o ID informado" });
    };

    return res.json(produto);
};

export const calcularFretePorCep = async (req, res) => {
    const idProduto = Number(req.params.idProduto);

    if (isNaN(idProduto)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    };

    const produto = produtos.find(produto => produto.id === idProduto);

    if (!produto) {
        return res.status(404).json({ mensagem: "Não existe produto para o ID informado" });
    };

    const { cep } = req.params;
    const estado = await getStateFromZipcode(cep);

    let valorFrete = 0;

    if (estado === 'SP' || estado === 'RJ') {
        valorFrete = produto.valor * 0.15;

        return res.json({
            produto,
            estado,
            frete: valorFrete
        });
    }

    if (estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB') {
        valorFrete = produto.valor * 0.1;

        return res.json({
            produto,
            estado,
            frete: valorFrete
        });
    }

    valorFrete = produto.valor * 0.12;

    return res.json({
        produto,
        estado,
        frete: valorFrete
    });
};
