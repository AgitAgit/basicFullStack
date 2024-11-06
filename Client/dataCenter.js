const serverAddress = "http://localhost:3000";

export const getJokes = async function () {
  let jokes = await fetch(`${serverAddress}/api/jokes`);

  jokes = await jokes.json();

  return jokes;
};

export const deleteJoke = async function (id) {
  const result = await axios.delete(`${serverAddress}/api/jokes/byId/${id}`);

  return result;
};

export const addJoke = async function (setup, punchline, _createdBy = null) {
  const body = {
    setup: setup,
    punchline: punchline,
  };

  if (_createdBy) body.createdBy = _createdBy;

  const result = await axios.post(`${serverAddress}/api/jokes/single`, body);

  return result;
};
