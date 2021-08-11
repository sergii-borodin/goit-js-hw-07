
const input = document.querySelector('#validation-input');

input.addEventListener('change', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.length !== 6) {
        input.classList.add('invalid');
        console.log(event.currentTarget.value.length);
        
    } else
        input.classList.remove('invalid');
        input.classList.add('valid');
    
}
