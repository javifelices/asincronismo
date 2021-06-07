function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(6, 2, sum));

function date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);


const booksDb = [
    { id: 1, title: 'Clean Code', authorId: 1 },
    { id: 2, title: 'The pragmantic programmer', authorId: 2 },
    { id: 3, title: 'Web Development with Node.js', authorId: 3 },
];

const authorsDb = [
    { id: 1, name: "Robert C. Martin" },
    { id: 2, name: 'Steve Forest' }
];

function getBookById(id, callback) {
    const book = booksDb.find(book => book.id === id);
    if(!book) {
        const error = new Error('Book not found');
        error.message = 'Book not found';
        return callback(error);
    }

    callback(null, book);
}

function getAuthorById(id, callback) {
    const author = authorsDb.find(author => author.id === id);
    if(!author) {
        const error = new Error('Author not found');
        error.message = 'Author not found';
        return callback(error);
    }

    callback(null, author);
}

getBookById(1, (err, book) => {
    if (err) {
        return console.error(err.message);
    }

    getAuthorById(book.authorId, (err, author) => {
        if (err) {
            return console.error(err.message);
        }

        console.log(`This book ${book.title} was written by ${author.name}`);
    });

    return console.log(book);
});


function soyAsincrona(miCallback) {
    setTimeout(() => {
        console.log('Estoy siendo asíncrona');
        miCallback();
    }, 2000);
}

console.log('Inicianddo proceso...');
soyAsincrona(() => {
    console.log('Terminando proceso...');
});

function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`);
        miCallback();
    }, 2000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios, ${nombre}`);
        otroCallback();
    }, 2500);
}

console.log('Inicianddo proceso...');
hola("Javi", function () {
    adios("Javi", function () {
        console.log('Terminando proceso...');
    });
});
