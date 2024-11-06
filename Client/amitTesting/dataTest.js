import { getJokes, deleteJoke, addJoke } from './dataMethods.js';

//67234ab370fe1388b302eb6b buffalo joke id

let data = await getJokes(); 

console.log(data);

let result = await addJoke('testing client add joke 1','testing client add joke 1');

console.log(result);

data = await getJokes(); 

console.log(data);

addUser({
    username:'test 2 adding user with password hashing',
    password:'2',
    email:'abc2@example.com'
});