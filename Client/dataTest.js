import { getJokes, deleteJoke, addJoke } from './dataCenter.js';

//67234ab370fe1388b302eb6b buffalo joke id

let data = await getJokes(); 

console.log(data);

let result = await addJoke('testing client add joke 1','testing client add joke 1');

console.log(result);

data = await getJokes(); 

console.log(data);

const serverAddress = 'http://localhost:3000';
async function addUser(user){
    try{
        const reply = await axios.post(`${serverAddress}/api/users/single`,{
            user: user
        })
        console.log("reply:", reply);
    } catch(error){
        console.log('from dataTest', error);
    }
}
addUser({
    username:'test adding user with password hashing',
    password:'12341234',
    email:'abc@example.com'
});