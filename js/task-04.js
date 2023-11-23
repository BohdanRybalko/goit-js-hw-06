const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const counterValue = document.getElementById("value");

let value = 0;

function decrement() {
  value--;
  counterValue.textContent = value;
}

function increment() {
  value++;
  counterValue.textContent = value;
}

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);