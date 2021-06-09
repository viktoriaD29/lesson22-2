const inputElem = document.querySelector('.text-input');
function getText () {
  const input = document.querySelector('input');
  console.log(input.value);
}
inputElem.addEventListener('change', getText)