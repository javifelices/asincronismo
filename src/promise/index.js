const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('¡Hey!')
            : reject('¡¡¡Whooops!!!');
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('¡¡¡Whooops!!!');
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log('Esto marcha'))
    .catch(err => console.error(err));


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => console.log('Array of results', response))
    .catch(err => console.error(err));


const booksDb = [
    { id: 1, title: 'Clean Code', authorId: 1 },
    { id: 2, title: 'The pragmantic programmer', authorId: 2 },
    { id: 3, title: 'Web Development with Node.js', authorId: 3 },
];

const authorsDb = [
    { id: 1, name: "Robert C. Martin" },
    { id: 2, name: 'Steve Forest' }
];

const getBookById = (id) => {
    return new Promise((resolve, reject) => {
        const book = booksDb.find(book => book.id === id);
        if (book) {
            resolve(book);
        } else {
            const error = new Error('Book not found');
            error.message = 'Book not found';
            reject(error);
        }
    });
};

const getAuthorById = (id) => {
    return new Promise((resolve, reject) => {
        const author = authorsDb.find(author => author.id === id);
        if (author) {
            resolve(author);
        } else {
            const error = new Error('Author not found');
            error.message = 'Author not found';
            reject(error);
        }
    });
};

getBookById(3)
    .then(book => getAuthorById(book.id))
    .then(author => console.log(author))
    .catch(err => console.error(err.message));
