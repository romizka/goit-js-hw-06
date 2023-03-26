const textInput = document.getElementById('validation-input');
textInput.addEventListener('blur', () => {

    if(textInput.value.length === +textInput.dataset.length) {
        textInput.className = 'valid'
    } else {
        textInput.className = 'invalid';
    }
})