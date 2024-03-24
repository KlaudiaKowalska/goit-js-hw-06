const valueSpan = document.getElementById("value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButtonn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

function countClicks() {
  valueSpan.textContent = counterValue;
}

decrementButtonn.addEventListener("click", () => {
  counterValue--;
  countClicks();
});

incrementButton.addEventListener("click", () => {
  counterValue++;
  countClicks();
});

countClicks();
