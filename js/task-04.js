// const refs = {
//     decreaseBtn: document.querySelector('[data-action="decrement"]'),
//     increaseBtn: document.querySelector('[data-action="increment"]'),
//     value: document.querySelector('#value'),
// };



// refs.decreaseBtn.addEventListener('click', onIncreaseValue);
// refs.increaseBtn.addEventListener('click', onDecreaseValue);


// function onIncreaseValue() {
//     console.log(parseInt(refs.value.textContent));
//     refs.value.textContent = parseInt(refs.value.textContent) - 1;
// }

// function onDecreaseValue() {
//     console.log(parseInt(refs.value.textContent));
//     refs.value.textContent = parseInt(refs.value.textContent) + 1;
// }


const refs = {
    decreaseBtn: document.querySelector('[data-action="decrement"]'),
    increaseBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
};

let counterValue = parseInt(refs.value.textContent);

refs.decreaseBtn.addEventListener('click', onIncreaseValue);
refs.increaseBtn.addEventListener('click', onDecreaseValue);

function onIncreaseValue() {
    //console.log(counterValue);
    counterValue -= 1;
    refs.value.textContent = counterValue;
}

function onDecreaseValue() {
    //console.log(counterValue);
    counterValue += 1;
    refs.value.textContent = counterValue;
}

