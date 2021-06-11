const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';
// const API = 'https://pokeapi.co/api/v2/pokemon/?offset=120&limit=20';

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(err => console.error(err));




// fetchData(API)
//     .then(data => {
//         console.log(data.results[11].name);
//         return fetchData(`${data.results[11].url}`);
//     })
//     .then(data => {
//     console.log(data.abilities[0].ability.name)
//     return fetchData(`${data.abilities[0].ability.url}`)
//     })
//     .then(data =>{
//     console.log(data.effect_entries[1].effect)}
//     )
//     .catch(err => console.error(err));
