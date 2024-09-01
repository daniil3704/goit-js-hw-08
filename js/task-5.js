function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector('body')
const button = document.querySelector('.change-color')
const spanColor = document.querySelector('.color')

button.addEventListener("click", () => {
  const temp = getRandomHexColor()
  body.style.backgroundColor = temp
  spanColor.textContent = temp
})
