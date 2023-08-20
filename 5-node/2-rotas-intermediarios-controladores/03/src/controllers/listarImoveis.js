import { imoveis } from '../data/imoveis.js';

export const listarImoveis = (req, res) => {
    return res.send(imoveis);
};

export const listarImovelPorId = (req, res) => {
    const id = Number(req.params.id);

    const imovel = imoveis.filter( imovel => imovel.id === id );
    return res.send(imovel);
};