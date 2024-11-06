import { getJokes, deleteJoke, addJoke, addUser, isValidUser, getJokesByUser } from './dataMethods.js';

//67234ab370fe1388b302eb6b buffalo joke id

//6727b218559bb528f3ec43a4 default user id

let data = await getJokes(); 

console.log("jokes", data);

// let result = await addJoke('testing client add joke 1','testing client add joke 1');

// console.log(result);

data = await getJokesByUser('6727b218559bb528f3ec43a4'); 

console.log("jokes by user:", data);

const user3 = {
    username:'test 3 adding user with password hashing',
    password:'3',
    email:'abc3@example.com'
}
// addUser(user3);

// let result = await isValidUser(user3);
// console.log("result", result);