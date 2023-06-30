const a1 = document.getElementById('a1');
const b1 = document.getElementById('b1');
const c1 = document.getElementById('c1');
const a2 = document.getElementById('a2');
const b2 = document.getElementById('b2');
const c2 = document.getElementById('c2');
const a3 = document.getElementById('a3');
const b3 = document.getElementById('b3');
const c3 = document.getElementById('c3');

let turnCounter = 1;

function makeAMove(event) {
    event.preventDefault();

    if (turnCounter === 1) {
        if (a1.textContent === '') {
            a1.textContent = 'x'
        }
        if (b1.textContent === '') {
            b1.textContent = 'x'
        }
    }

    turnCounter++;
    // console.log(turnCounter);
};

a1.addEventListener('click', makeAMove);
b1.addEventListener('click', makeAMove);
c1.addEventListener('click', makeAMove);
a2.addEventListener('click', makeAMove);
b2.addEventListener('click', makeAMove);
c2.addEventListener('click', makeAMove);
a3.addEventListener('click', makeAMove);
b3.addEventListener('click', makeAMove);
c3.addEventListener('click', makeAMove);
