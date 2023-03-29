// Criação do grupo Book e printing no console
// FACTORY - é a junção de dois grupos em um só.

function createBook(title, author, pages) {
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function () {
            console.log('Printing...')
        }
    }
    return book
}

const book1 = createBook('Atomic Habits', 'James', 306)
const book2 = createBook('Think and that rice', 'Napolean Hill', 450)

console.log(book1)
console.log(book2)



// function printBook () {
//     console.log('printing...')
// }



