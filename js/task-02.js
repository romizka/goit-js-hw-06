const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liElements = [];
const ingredientsList = document.getElementById('ingredients');

for ( let i = 0; i < ingredients.length; i++) {
const liEl =  document.createElement('li');
liEl.textContent = ingredients[i];
liEl.classList.add('item');
liElements.push(liEl);
}

ingredientsList.append(...liElements);


