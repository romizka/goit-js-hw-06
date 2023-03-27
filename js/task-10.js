function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBox = document.getElementById("boxes");
const inputEl = document.querySelector('input[type="number"]');
let sizeBox = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newElement = document.createElement("div");
    newElement.style.backgroundColor = getRandomHexColor();
    newElement.style.width = sizeBox + 'px';
    newElement.style.height = sizeBox + 'px';
    sizeBox += 10;
    divBox.append(newElement);
  }
}

function destroyBoxes() {
  divBox.innerHTML = '';
}

createBtn.addEventListener("click", () => createBoxes(inputEl.value));
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  inputEl.value = "";
});