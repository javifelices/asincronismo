const doSomeThingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 2500)
            : reject(new Error('Test Error'));
    });
};

const someThingAsync = async () => {
    const something = await doSomeThingAsync();
    console.log(something);
};

console.log('Before');
someThingAsync();
console.log('After');


const otherSomeThingAsync = async () => {
    try {
        const something = await doSomeThingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
};

console.log('Before One');
otherSomeThingAsync();
console.log('After One');


const booksDb = [
    { id: 1, title: 'Clean Code', authorId: 1 },
    { id: 2, title: 'The pragmantic programmer', authorId: 2 },
    { id: 3, title: 'Web Development with Node.js', authorId: 3 },
];

const authorsDb = [
    { id: 1, name: "Robert C. Martin" },
    { id: 2, name: 'Steve Forest' }
];

const getBookById = async (id) => {
    const book = booksDb.find(book => book.id === id);
    if (!book) {
        const error = new Error('Book not found');
        error.message = 'Book not found';
        throw error;
    }
    return book;
};

const getAuthorById = async (id) => {
    const author = authorsDb.find(author => author.id === id);
    if (!author) {
        const error = new Error('Author not found');
        error.message = 'Author not found';
        throw error;
    }
    return author;
};

const main = async () => {
    try {
        const book = await getBookById(5);
        const author = await getAuthorById(book.authorId);
        console.log(`This book ${book.title} was written by ${author.name}`);
    } catch (error) {
        console.error(error.message);
    }
};

main();
