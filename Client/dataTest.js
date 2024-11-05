import { getJokes, deleteJoke, addJoke } from './dataCenter.js';

//67234ab370fe1388b302eb6b buffalo joke id

let data = await getJokes(); 

console.log(data);

let result = await addJoke('testing client add joke 1','testing client add joke 1');

console.log(result);

data = await getJokes(); 

console.log(data);