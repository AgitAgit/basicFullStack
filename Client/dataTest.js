import { getJokes, deleteJoke } from './dataCenter.js';

//67234ab370fe1388b302eb6b buffalo joke id

const data = await getJokes(); 

console.log("jokes", data);

const result = await deleteJoke('67234ab370fe1388b302eb6b');

console.log("result:", result);

const data2 = await getJokes(); 

console.log("jokes", data);
