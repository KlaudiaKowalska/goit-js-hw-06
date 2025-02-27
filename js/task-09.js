function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const body = document.body;
const spanColor = document.querySelector(".color");
buttonChangeColor.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});
