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
    { id: 1, title: 'Clean Code' },
    { id: 2, title: 'The pragmantic programmer' },
    { id: 3, title: 'Web Development with Node.js' },
];

function getBookId(id, callback) {
    const book = booksDb.find(book => book.id === id);
    if(!book) {
        const error = new Error('Book not found');
        error.message = 'Book not found';
        return callback(error);
    }

    callback(null, book);
}

getBookId(4, (err, book) => {
    if (err) {
        return console.error(err.message);
    }
    return console.log(book);
});
