function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`);
        miCallback(nombre);
    }, 2000);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('Bla bla bla bla bla...');
        callbackHablar();
    }, 3000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios, ${nombre}`);
        otroCallback();
    }, 2000);
}

function conversacion(nombre, numeroVeces, callback) {
    if (numeroVeces > 0) {
        hablar(function() {
            conversacion(nombre, --numeroVeces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

console.log('Inicianddo proceso...');
hola('Javi', function (nombre) {
    conversacion(nombre, 3, function () {
        console.log('Terminando proceso...');
    });
});

// Callback Hell
// hola("Javi", function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function () {
//                     console.log('Terminando proceso...');
//                 });
//             })
//         })
//     })
// });
