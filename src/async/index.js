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
