function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const dataCreate = document.querySelector("[data-create]");
const dataDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.getElementById("boxes");
const inputField = document.querySelector("input");
let inputValue = 0;

function createBoxes(amount) {
  destroyBoxes()
  let divArray = [];
  let counter = 0;
  let startDiv = 30;
  for (let i = 0; i < amount; i++) {
    divArray[counter] = document.createElement("div");
    divArray[counter].style.width = `${startDiv}px`;
    divArray[counter].style.height = `${startDiv}px`;
    divArray[counter].style.backgroundColor = getRandomHexColor();
    startDiv += 10;
    counter++;
  }
  divBoxes.append(...divArray);
  inputField.value = ''
}

function destroyBoxes() {
  const divArray = divBoxes.querySelectorAll("div");
  divArray.forEach((div) => {
    div.remove();
    inputField.value = ''
  });
}

inputField.addEventListener("input", () => {
  inputValue = inputField.value;
});

dataCreate.addEventListener("click", () => {
  if (inputValue >= 1 && inputValue <= 100) {
    createBoxes(inputValue);
  } else {
  }
});

dataDestroy.addEventListener("click", () => {
  destroyBoxes();
});
