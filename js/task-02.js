const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for ( let i = 0; i < ingredients.length; i++) {
const liEl =  document.createElement('li');
const ingredientsList = document.getElementById('ingredients');
liEl.textContent = ingredients[i];
liEl.classList.add('item');
ingredientsList.append(liEl);
}


