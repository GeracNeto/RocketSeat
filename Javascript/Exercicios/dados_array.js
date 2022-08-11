
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

// Resolução

// Contar o número de categorias e o número de livros em cada categoria
console.log(`Total de categorias: ${booksByCategory.length}`);

for (let category of booksByCategory) {

    console.log(`Total de livros da categoria ${category.category} é ${category.books.length}`);
}

// Contar o número de autores
const countAuthors = (arr) => {

    let authors = [];

    for (let lib of arr) {

        for (let item of lib.books) {

            // Caso o indexOf retornar -1 significa que o elemento não existe no array
            if (authors.indexOf(item.author) === -1) {

                authors.push(item.author);
            };
        };
    };

    return `Total de autores: ${authors.length}`;
}

console.log(countAuthors(booksByCategory));

// Mostar livros do autor pesquisado.
const showBooksAuthor = (arr, author) => {

    let booksAuthor = [];

    for (let category of arr) {

        for (let book of category.books) {

            if (book.author === author) {

                booksAuthor.push(book.title);
            };
        };
    };

    return `Livros do ${author}: ${booksAuthor.join(", ")}`

};

console.log(showBooksAuthor(booksByCategory, 'Stephen R. Covey'));




