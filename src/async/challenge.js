const fetchData = require('./../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';
const otherAPI = 'https://pokeapi.co/api/v2/pokemon/?offset=120&limit=20';

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${url_api}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    } catch (error) {
        console.error(error);
    }
};

console.log('Before');
anotherFunction(API);
console.log('After');
