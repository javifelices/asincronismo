function hola(nombre) {
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

function hablar(nombre) {
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

function adios(nombre) {
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

console.log('Iniciando proceso...');
hola('Javi')
    // .then((nombre) => {
    //     return adios(nombre);
    // })
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminando proceso...');
    })
    .catch(err => {
        console.error('¡¡¡ERROR!!!');
        console.error(err);
    });
