let inputEl = document.getElementById('name-input');

let nameEl = document.getElementById('name-output');

inputEl.addEventListener('input', (event) => {
    if (inputEl.value) {
    nameEl.textContent = event.currentTarget.value;
    } else {
    nameEl.textContent = "Anonymous";
    }

    })