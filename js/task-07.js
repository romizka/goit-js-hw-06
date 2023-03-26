const inputControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

inputControl.addEventListener('change', function(event) {
    text.style.fontSize = event.currentTarget.value + 'px';
})