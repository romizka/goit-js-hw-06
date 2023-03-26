let counterValue = 0;
const btnAdd = document.querySelectorAll('button')[1];
const btnSub = document.querySelectorAll('button')[0];
let value = document.getElementById('value');

const addValue = function() {
counterValue++;
value.innerHTML = counterValue;
}

const subValue = function() {
counterValue--;
value.innerHTML = counterValue
}


btnAdd.addEventListener('click', addValue)
btnSub.addEventListener('click', subValue)


