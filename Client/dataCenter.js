const serverAddress = 'http://localhost:3000';

export const getJokes = async function(){
    const jokes = await fetch(`${serverAddress}/api/jokes`);
    console.log(jokes);

    return jokes;
}