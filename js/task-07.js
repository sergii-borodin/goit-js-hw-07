const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

rangeRef.addEventListener('input', onRangeChange);

function onRangeChange(event) {
    
    const rangeValue = event.currentTarget.value;
    console.log(rangeValue, 'rangeValue');
    textRef.setAttribute("style", `font-size: ${rangeValue};`)
}