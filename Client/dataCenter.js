const serverAddress = 'http://localhost:3000';

export const getJokes = async function(){
    console.log('test test');
    let jokes = await fetch(`${serverAddress}/api/jokes`);
    
    jokes = await jokes.json();

    // console.log("jokes:", jokes);

    return jokes;
}

export const deleteJoke = async function(id){
    const result = await axios.delete(`${serverAddress}/api/jokes/byId/${id}`);
    
    // const jsonResult = await result.json();

    console.log("result:", result);
}