const books: string[] = [
    "Guerra e Paz",
    "A Montanha Mágica",
    "Cem Anos de Solidão",
    "Dom Quixote",
    "A Divina Comédia",
];

const findBook = (books: string[], bookName: string): string => {
    const index: number = books.indexOf(bookName);

    if (index === -1) {
        return `Livro não encontrado`;
    }

    return `O livro está na posição ${index + 1}`;
};

console.log(findBook(books, "Dom Quixote"));
