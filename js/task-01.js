const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    const categoryName  = category.querySelector('h2');
    const categoryEl = category.querySelectorAll('li')
    console.log(`Category: ${categoryName.innerText}`);
    console.log(`Elements: ${categoryEl.length}`);

})


