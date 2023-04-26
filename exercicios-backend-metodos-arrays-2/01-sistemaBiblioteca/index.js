const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const encontrarLivros = livros.findIndex(livro => livro === nomeDoLivro);

if (encontrarLivros >= 0) {
    console.log(`O livro ${nomeDoLivro} está na posição ${encontrarLivros + 1}.`)
} else if (encontrarLivros < 0) {
    console.log(`O livro ${nomeDoLivro} não foi encontrado.`)
};


