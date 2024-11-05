import { getJokes } from "./dataCenter.js";

const data = await getJokes();
console.log(data);

const elSetupInput = document.querySelector(".setup");
const elPunchLineInput = document.querySelector(".punchline");

const elCreateBtn = document.querySelector(".create-btn");

const elForm = document.getElementById("add-form");

const renderJokes = () => {};
