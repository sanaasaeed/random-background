const background = document.getElementById("background");
const btn = document.getElementById("btn");
const value = document.querySelector(".value");
const hexArray = new Array(6).fill(6);
let string = "#";

const getStringHex = () => {
  for (let i = 0; i < hexArray.length; i++) {
    hexArray[i] = Math.floor(Math.random() * 10);
  }
  hexArray.forEach((hex) => {
    string += hex;
  });
  value.textContent = string;
  background.style.backgroundColor = string;
  string = "#";
};

btn.addEventListener("click", getStringHex);
