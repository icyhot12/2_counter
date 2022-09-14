let startCounter = 0;

const btnMinus = document.getElementById('minus');
const btnReset = document.getElementById('reset');
const btnPlus = document.getElementById('plus');

btnMinus.addEventListener('click', function () {
    startCounter = startCounter - 1;
    document.getElementById('counter').innerHTML = startCounter;
})

btnPlus.addEventListener('click', function () {
    startCounter = startCounter + 1;
    document.getElementById('counter').innerHTML = startCounter;
})

btnReset.addEventListener('click', function () {
    startCounter = 0;
    document.getElementById('counter').innerHTML = startCounter;
})