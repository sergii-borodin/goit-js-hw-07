const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}
refs.input.addEventListener('input', onInputChange);
const defaultValue = "unknown user";

function onInputChange(event) {
    if (event.currentTarget.value.length === 0) {
        refs.output.textContent = defaultValue;
    } else {
        refs.output.textContent = event.currentTarget.value;
    }
}