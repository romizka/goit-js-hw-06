function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  

}

const btn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

const clickHandler = function () {
  document.body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}
btn.addEventListener('click', clickHandler);
