const serverAddress = "http://localhost:3000";

export const getJokes = async function () {
  console.log("test test");
  const jokes = await fetch(`${serverAddress}/api/jokes`);
  console.log(jokes);

  return jokes;
};
