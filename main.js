
let rez = 0;
let random = 0;

const history = document.querySelector('.history');
const plius = document.querySelector('.plius');
const minus = document.querySelector('.minus');
const reset = document.querySelector('.reset');

const number = document.querySelector('.number');

number.innerText = rez;

function pliusClick() {
    random = random + parseInt(Math.floor(Math.random() * 100 + 1));
    console.log("pliusas veikia");
    console.log(random);
    number.innerText = number.innerText + random;
}

function minusClick() {
    random = random + (Math.floor(Math.random() * 100 + 1));
    console.log("minusas veikia");
    console.log(random);
    number.innerText = number.innerText - random;
}

function restartClick() {
    number.innerText = 0;
    console.log("restart veikia");
    rez = 0;
    random = 0;
}


plius.addEventListener('click', pliusClick);
minus.addEventListener('click', minusClick);
reset.addEventListener('click', restartClick);