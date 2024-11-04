const serverAddress = 'http://localhost:3000';

export const getJokes = async function(){
    console.log('test test');
    let jokes = await fetch(`${serverAddress}/api/jokes`);
    
    jokes = await jokes.json();

    // console.log("jokes:", jokes);

    return jokes;
}