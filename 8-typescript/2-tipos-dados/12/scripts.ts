type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type EnderecoCobranca = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type NovoCarrinho = Omit<Carrinho, 'tipoTransacao'> & {
    endereco: EnderecoCobranca,
    tipoTransacao: Lowercase<'credito' | 'Debito'>
}