const logButton = document.getElementById("logButton");
const signButton = document.getElementById("signButton");
const changeButton = document.querySelector(".changeButton");
const logCon = document.getElementById("logCon");
const signCon = document.getElementById("signCon");
const hl2 = document.getElementById("hl2");
const hl1 = document.getElementById("hl1");
const changePage = document.querySelector(".changePage");

const passwordIn = document.getElementById("passwordInput");
const passwordIn2 = document.getElementById("passwordInput2");
const passwordInVer = document.getElementById("passwordVerInput");

signCon.style.display = "flex";
logCon.style.display = "none";
hl1.style.display = "flex";
hl2.style.display = "none";

// changes the page
document.addEventListener("DOMContentLoaded", () => {
  changeButton.addEventListener("click", () => {
    if (signCon.style.display === "flex") {
      hl2.style.display = "flex";
      logCon.style.display = "flex";
      hl1.style.display = "none";
      signCon.style.display = "none";
      changePage.innerHTML = `If you're not signed yet click`;
    } else if (signCon.style.display === "none") {
      hl2.style.display = "none";
      logCon.style.display = "none";
      hl1.style.display = "flex";
      signCon.style.display = "flex";
      changePage.innerHTML = `If you already have a user click`;
    }
  });
});