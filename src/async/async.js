async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        if (true) {
            setTimeout(() => {
                console.log(`Hola, ${nombre}`);
                resolve(nombre);
            }, 2000);
        } else {
            const error = new Error('¡Ha habido un error en el saludo!');
            reject(error);
        }
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(function () {
                console.log('Bla bla bla bla bla...');
                resolve(nombre);
            }, 3000);
        } else {
            const error = new Error('¡Ha habido un error en la conversación!');
            reject(error);
        }
    })
}

async function adios(nombre) {
    return new Promise(function (resolve, reject) {
        if (true) {
            setTimeout(() => {
                console.log(`Adios, ${nombre}`);
                resolve();
            }, 2000);
        } else {
            const error = new Error('¡Ha habido un error en la despedida!');
            reject(error);
        }
    });
}


async function main() {
    try {
        let nombre = await hola('Javi');
        await hablar();
        await hablar();
        await hablar();
        await adios(nombre);
        console.log('Terminando proceso...');
    } catch (error) {
        console.error(error);
    }
}

console.log('Inicianddo proceso...');
main();
console.log('¿FIN? Para nada, se ejecuta como segunda instrucción');
