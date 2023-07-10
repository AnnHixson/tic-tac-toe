// Game Board
const a1 = document.getElementById('a1');
const b1 = document.getElementById('b1');
const c1 = document.getElementById('c1');
const a2 = document.getElementById('a2');
const b2 = document.getElementById('b2');
const c2 = document.getElementById('c2');
const a3 = document.getElementById('a3');
const b3 = document.getElementById('b3');
const c3 = document.getElementById('c3');

// Other Page Elements
const clearBoardBtn = document.getElementById('clear-board');
const optionsBtn = document.getElementById('options');
const optionsContent = document.getElementById('options-content');
const vsCpu = document.getElementById('cpu-vs-multi-cpu');
const vsMulti = document.getElementById('cpu-vs-multi-multi');
const cpuOptions = document.getElementById('cpu-options');
const cpuIsX = document.getElementById('cpu-x-or-o-x');
const cpuIsO = document.getElementById('cpu-x-or-o-o');
const winnerDisplay = document.getElementById('winner-display');

// Initial Settings
optionsContent.style.display = 'none';
cpuOptions.style.display = 'none';
winnerDisplay.style.display = 'none';
let turnCounter = 1;
let vsCPUSelected = false;
let vsMultiSelected = true;
let cpuIsXSelected = false;
let cpuIsOSelected = false;

// This function increases the turn counter and runs the checkWin function
function makeAMove() {
    turnCounter++;
    checkWin();
};

// This function checks if the game is complete (win or tie)
function checkWin() {
    if ((a1.textContent === 'x' && b1.textContent === 'x' && c1.textContent === 'x') || (a1.textContent === 'x' && b2.textContent === 'x' && c3.textContent === 'x') || (a1.textContent === 'x' && a2.textContent === 'x' && a3.textContent === 'x') || (b1.textContent === 'x' && b2.textContent === 'x' && b3.textContent === 'x') || (c1.textContent === 'x' && c2.textContent === 'x' && c3.textContent === 'x') || (c1.textContent === 'x' && b2.textContent === 'x' && a3.textContent === 'x') || (a2.textContent === 'x' && b2.textContent === 'x' && c2.textContent === 'x') || (a3.textContent === 'x' && b3.textContent === 'x' && c3.textContent === 'x')) {
        winnerDisplay.style.display = 'block';
        winnerDisplay.textContent = 'X Wins!';
    } else if ((a1.textContent === 'o' && b1.textContent === 'o' && c1.textContent === 'o') || (a1.textContent === 'o' && b2.textContent === 'o' && c3.textContent === 'o') || (a1.textContent === 'o' && a2.textContent === 'o' && a3.textContent === 'o') || (b1.textContent === 'o' && b2.textContent === 'o' && b3.textContent === 'o') || (c1.textContent === 'o' && c2.textContent === 'o' && c3.textContent === 'o') || (c1.textContent === 'o' && b2.textContent === 'o' && a3.textContent === 'o') || (a2.textContent === 'o' && b2.textContent === 'o' && c2.textContent === 'o') || (a3.textContent === 'o' && b3.textContent === 'o' && c3.textContent === 'o')) {
        winnerDisplay.style.display = 'block';
        winnerDisplay.textContent = 'O Wins!';
    } else if (a1.textContent !== '' && b1.textContent !== '' && c1.textContent !== '' && a2.textContent !== '' && b2.textContent !== '' && c2.textContent !== '' && a3.textContent !== '' && b3.textContent !== '' && c3.textContent !== '') {
        winnerDisplay.style.display = 'block';
        winnerDisplay.textContent = 'It\'s a Tie!';
    };
};

// This function resets the board to its initial settings
function clearBoard(event) {
    event.preventDefault();

    a1.textContent = '';
    b1.textContent = '';
    c1.textContent = '';
    a2.textContent = '';
    b2.textContent = '';
    c2.textContent = '';
    a3.textContent = '';
    b3.textContent = '';
    c3.textContent = '';

    turnCounter = 1;

    winnerDisplay.style.display = 'none';



    // IMPORTANT: TO BE DEALT WITH
    // CPU DOESN'T AUTO-PLAY TURN 1 AS 'X' AFTER HITTING CLEAR BOARD
    console.log(vsCPUSelected);
    console.log(vsMultiSelected);
    console.log(cpuIsXSelected);
    console.log(cpuIsOSelected);
    // ... SHOULD 'CLEAR BOARD' BE 'PLAY AGAIN' WHEN 'VS CPU' IS SELECTED ???
};

// This function displays (or hides) the game options
function displayOptions(event) {
    event.preventDefault();

    if (optionsContent.style.display === 'none') {
        optionsContent.style.display = 'block';
    } else if (optionsContent.style.display === 'block') {
        optionsContent.style.display = 'none';
        cpuOptions.style.display = 'none';
    }
};



// In Progress ...
// These functions handle the CPU's turns
function cpuPlaysX() {
    if (turnCounter === 1) {
        b2.textContent = 'x';
        makeAMove();
    } else if (turnCounter === 3) {
        if ((b1.textContent === 'o') || (a2.textContent === 'o') || (c2.textContent === 'o') || (b3.textContent === 'o')) {
            a1.textContent = 'x';
            makeAMove();
        } else if ((a1.textContent === 'o') || (c1.textContent === 'o') || (a3.textContent === 'o') || (c3.textContent === 'o')) {
            if (a1.textContent === 'o') {
                c3.textContent = 'x';
                makeAMove();
            } else if (c1.textContent === 'o') {
                a3.textContent = 'x';
                makeAMove();
            } else if (a3.textContent === 'o') {
                c1.textContent = 'x';
                makeAMove(); 
            } else if (c3.textContent === 'o') {
                a1.textContent = 'x';
                makeAMove();
            }
        }
    } else if (turnCounter === 5) {
        if ((a1.textContent === 'x') && (c3.textContent === '')) {
            c3.textContent = 'x';
            makeAMove();
        } else if ((((a1.textContent === 'x') && (c3.textContent === 'o')) || ((c1.textContent === 'x') && (a3.textContent === 'o')) || ((a3.textContent === 'x') && (c1.textContent === 'o')) || ((c3.textContent === 'x') && (a1.textContent === 'o'))) && ((b1.textContent === 'o') || (a2.textContent === 'o') || (c2.textContent === 'o') || (b3.textContent === 'o'))) {
            if (a1.textContent === 'x') {
                if ((b1.textContent === 'o') || (b3.textContent === 'o')) {
                    a3.textContent = 'x';
                    makeAMove();
                } else if ((a2.textContent === 'o') || (c2.textContent === 'o')) {
                    c1.textContent = 'x';
                    makeAMove();
                }
            } else if (c1.textContent === 'x') {
                if ((b1.textContent === 'o') || (b3.textContent === 'o')) {
                    c3.textContent = 'x';
                    makeAMove();
                } else if ((a2.textContent === 'o') || (c2.textContent === 'o')) {
                    a1.textContent = 'x';
                    makeAMove();
                }
            } else if (a3.textContent === 'x') {
                if ((b1.textContent === 'o') || (b3.textContent === 'o')) {
                    a1.textContent = 'x';
                    makeAMove();
                } else if ((a2.textContent === 'o') || (c2.textContent === 'o')) {
                    c3.textContent = 'x';
                    makeAMove();
                }
            } else if (c3.textContent === 'x') {
                if ((b1.textContent === 'o') || (b3.textContent === 'o')) {
                    c1.textContent = 'x';
                    makeAMove();
                } else if ((a2.textContent === 'o') || (c2.textContent === 'o')) {
                    a3.textContent = 'x';
                    makeAMove();
                }
            }
        }
         else if ((b1.textContent === '') && (a2.textContent === '') && (c2.textContent === '') && (b3.textContent === '')) {
            if ((a1.textContent === 'o') && (a3.textContent === 'o')) {
                a2.textContent = 'x';
                makeAMove();
            } else if ((a1.textContent === 'o') && (c1.textContent === 'o')) {
                b1.textContent = 'x';
                makeAMove();
            } else if ((a3.textContent === 'o') && (c3.textContent === 'o')) {
                b3.textContent = 'x';
                makeAMove();
            } else if ((c1.textContent === 'o') && (c3.textContent === 'o')) {
                c2.textContent = 'x';
                makeAMove();
            }
         } 
    } else if (turnCounter === 7) {
        if ((a1.textContent === 'x') && (b1.textContent === '') && (c1.textContent === 'x')) {
            b1.textContent = 'x';
            makeAMove();
        } else if ((a1.textContent === 'x') && (a2.textContent === '') && (a3.textContent === 'x')) {
            a2.textContent = 'x';
            makeAMove();
        } else if ((c1.textContent === 'x') && (c2.textContent === '') && (c3.textContent === 'x')) {
            c2.textContent = 'x';
            makeAMove();
        } else if ((a3.textContent === 'x') && (b3.textContent === '') && (c3.textContent === 'x')) {
            b3.textContent = 'x';
            makeAMove();
        } else if ((a1.textContent === 'x') && (c3.textContent === '')) {
            c3.textContent = 'x';
            makeAMove();
        } else if ((c1.textContent === 'x') && (a3.textContent === '')) {
            a3.textContent = 'x';
            makeAMove();
        } else if ((a3.textContent === 'x') && (c1.textContent === '')) {
            c1.textContent = 'x';
            makeAMove();
        } else if ((c3.textContent === 'x') && (a1.textContent === '')) {
            a1.textContent = 'x';
            makeAMove();
        } else if (((a1.textContent === 'o') && (a3.textContent === 'o') && (c3.textContent === 'x')) || ((c1.textContent === 'o') && (c3.textContent === 'o') && (a3.textContent === 'x'))) {
            b1.textContent = 'x';
            makeAMove();
        } else if (((a1.textContent === 'o') && (c1.textContent === 'o') && (c3.textContent === 'x')) || ((a3.textContent === 'o') && (c3.textContent === 'o') && (c1.textContent === 'x'))) {
            a2.textContent = 'x';
            makeAMove();
        } else if (((a1.textContent === 'o') && (c1.textContent === 'o') && (a3.textContent === 'x')) || ((a3.textContent === 'o') && (c3.textContent === 'o') && (a1.textContent === 'x'))) {
            c2.textContent = 'x';
            makeAMove();
        } else if (((a1.textContent === 'o') && (a3.textContent === 'o') && (c1.textContent === 'x')) || ((c1.textContent === 'o') && (c3.textContent === 'o') && (a1.textContent === 'x'))) {
            b3.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if ((b1.textContent === 'x') && (b3.textContent === '')) {
            b3.textContent = 'x';
            makeAMove();
        } else if ((a2.textContent === 'x') && (c2.textContent === '')) {
            c2.textContent = 'x';
            makeAMove();
        } else if ((c2.textContent === 'x') && (a2.textContent === '')) {
            a2.textContent = 'x';
            makeAMove();
        } else if ((b3.textContent === 'x') && (b1.textContent === '')) {
            b1.textContent = 'x';
            makeAMove();
        } else if (a1.textContent === '') {
            a1.textContent = 'x';
            makeAMove();
        } else if (c1.textContent === '') {
            c1.textContent = 'x';
            makeAMove();
        } else if (a3.textContent === '') {
            a3.textContent = 'x';
            makeAMove();
        } else if (c3.textContent === '') {
            c3.textContent = 'x';
            makeAMove();
        }
    };
}
function cpuPlaysO() {
    if (turnCounter === 2) {

    } else if (turnCounter === 4) {

    } else if (turnCounter === 6) {
        
    } else if (turnCounter === 8) {
        
    };
}


// These functions set whether 'x' or 'o' will appear in the selected space and trigger the CPU's turn if 'VS CPU' is selected
function selectA1(event) {
    event.preventDefault();

    if (turnCounter === 1) {
        if (a1.textContent === '') {
            a1.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (a1.textContent === '') {
            a1.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (a1.textContent === '') {
            a1.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (a1.textContent === '') {
            a1.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (a1.textContent === '') {
            a1.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (a1.textContent === '') {
            a1.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (a1.textContent === '') {
            a1.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (a1.textContent === '') {
            a1.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (a1.textContent === '') {
            a1.textContent = 'x';
            makeAMove();
        }
    };

    if (vsCPUSelected === true) {
        if (cpuIsXSelected === true) {
            cpuPlaysX();
        } else if (cpuIsOSelected === true) {
            cpuPlaysO();
        }
    };
};
function selectB1(event) {
    event.preventDefault();

    if (turnCounter === 1) {
        if (b1.textContent === '') {
            b1.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (b1.textContent === '') {
            b1.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (b1.textContent === '') {
            b1.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (b1.textContent === '') {
            b1.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (b1.textContent === '') {
            b1.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (b1.textContent === '') {
            b1.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (b1.textContent === '') {
            b1.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (b1.textContent === '') {
            b1.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (b1.textContent === '') {
            b1.textContent = 'x';
            makeAMove();
        }
    };

    if (vsCPUSelected === true) {
        if (cpuIsXSelected === true) {
            cpuPlaysX();
        } else if (cpuIsOSelected === true) {
            cpuPlaysO();
        }
    };
};
function selectC1(event) {
    event.preventDefault();

    if (turnCounter === 1) {
        if (c1.textContent === '') {
            c1.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (c1.textContent === '') {
            c1.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (c1.textContent === '') {
            c1.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (c1.textContent === '') {
            c1.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (c1.textContent === '') {
            c1.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (c1.textContent === '') {
            c1.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (c1.textContent === '') {
            c1.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (c1.textContent === '') {
            c1.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (c1.textContent === '') {
            c1.textContent = 'x';
            makeAMove();
        }
    };

    if (vsCPUSelected === true) {
        if (cpuIsXSelected === true) {
            cpuPlaysX();
        } else if (cpuIsOSelected === true) {
            cpuPlaysO();
        }
    };
};
function selectA2(event) {
    event.preventDefault();

    if (turnCounter === 1) {
        if (a2.textContent === '') {
            a2.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (a2.textContent === '') {
            a2.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (a2.textContent === '') {
            a2.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (a2.textContent === '') {
            a2.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (a2.textContent === '') {
            a2.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (a2.textContent === '') {
            a2.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (a2.textContent === '') {
            a2.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (a2.textContent === '') {
            a2.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (a2.textContent === '') {
            a2.textContent = 'x';
            makeAMove();
        }
    };

    if (vsCPUSelected === true) {
        if (cpuIsXSelected === true) {
            cpuPlaysX();
        } else if (cpuIsOSelected === true) {
            cpuPlaysO();
        }
    };
};
function selectB2(event) {
    event.preventDefault();

    if (turnCounter === 1) {
        if (b2.textContent === '') {
            b2.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (b2.textContent === '') {
            b2.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (b2.textContent === '') {
            b2.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (b2.textContent === '') {
            b2.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (b2.textContent === '') {
            b2.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (b2.textContent === '') {
            b2.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (b2.textContent === '') {
            b2.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (b2.textContent === '') {
            b2.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (b2.textContent === '') {
            b2.textContent = 'x';
            makeAMove();
        }
    };

    if (vsCPUSelected === true) {
        if (cpuIsXSelected === true) {
            cpuPlaysX();
        } else if (cpuIsOSelected === true) {
            cpuPlaysO();
        }
    };
};
function selectC2(event) {
    event.preventDefault();

    if (turnCounter === 1) {
        if (c2.textContent === '') {
            c2.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (c2.textContent === '') {
            c2.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (c2.textContent === '') {
            c2.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (c2.textContent === '') {
            c2.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (c2.textContent === '') {
            c2.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (c2.textContent === '') {
            c2.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (c2.textContent === '') {
            c2.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (c2.textContent === '') {
            c2.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (c2.textContent === '') {
            c2.textContent = 'x';
            makeAMove();
        }
    };

    if (vsCPUSelected === true) {
        if (cpuIsXSelected === true) {
            cpuPlaysX();
        } else if (cpuIsOSelected === true) {
            cpuPlaysO();
        }
    };
};
function selectA3(event) {
    event.preventDefault();

    if (turnCounter === 1) {
        if (a3.textContent === '') {
            a3.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (a3.textContent === '') {
            a3.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (a3.textContent === '') {
            a3.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (a3.textContent === '') {
            a3.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (a3.textContent === '') {
            a3.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (a3.textContent === '') {
            a3.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (a3.textContent === '') {
            a3.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (a3.textContent === '') {
            a3.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (a3.textContent === '') {
            a3.textContent = 'x';
            makeAMove();
        }
    };

    if (vsCPUSelected === true) {
        if (cpuIsXSelected === true) {
            cpuPlaysX();
        } else if (cpuIsOSelected === true) {
            cpuPlaysO();
        }
    };
};
function selectB3(event) {
    event.preventDefault();

    if (turnCounter === 1) {
        if (b3.textContent === '') {
            b3.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (b3.textContent === '') {
            b3.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (b3.textContent === '') {
            b3.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (b3.textContent === '') {
            b3.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (b3.textContent === '') {
            b3.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (b3.textContent === '') {
            b3.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (b3.textContent === '') {
            b3.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (b3.textContent === '') {
            b3.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (b3.textContent === '') {
            b3.textContent = 'x';
            makeAMove();
        }
    };

    if (vsCPUSelected === true) {
        if (cpuIsXSelected === true) {
            cpuPlaysX();
        } else if (cpuIsOSelected === true) {
            cpuPlaysO();
        }
    };
};
function selectC3(event) {
    event.preventDefault();

    if (turnCounter === 1) {
        if (c3.textContent === '') {
            c3.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (c3.textContent === '') {
            c3.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (c3.textContent === '') {
            c3.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (c3.textContent === '') {
            c3.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (c3.textContent === '') {
            c3.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (c3.textContent === '') {
            c3.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (c3.textContent === '') {
            c3.textContent = 'x';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (c3.textContent === '') {
            c3.textContent = 'o';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (c3.textContent === '') {
            c3.textContent = 'x';
            makeAMove();
        }
    };

    if (vsCPUSelected === true) {
        if (cpuIsXSelected === true) {
            cpuPlaysX();
        } else if (cpuIsOSelected === true) {
            cpuPlaysO();
        }
    };
};

// These functions are used to determine which options have been selected
function chooseCPU(event) {
    event.preventDefault();

    vsCPUSelected = true;
    vsMultiSelected = false;
    cpuIsXSelected = false;
    cpuIsOSelected = false;

    cpuOptions.style.display = 'block';   
}
function chooseMulti(event) {
    event.preventDefault();

    vsCPUSelected = false;
    vsMultiSelected = true;
    cpuIsXSelected = false;
    cpuIsOSelected = false;

    cpuOptions.style.display = 'none';
}
function chooseCpuX(event) {
    event.preventDefault();

    vsCPUSelected = true;
    vsMultiSelected = false;
    cpuIsXSelected = true;
    cpuIsOSelected = false;
    
    cpuPlaysX();
}
function chooseCpuO(event) {
    event.preventDefault();

    vsCPUSelected = true;
    vsMultiSelected = false;
    cpuIsXSelected = false;
    cpuIsOSelected = true;

    cpuPlaysO();
}

// Event Listeners
a1.addEventListener('click', selectA1);
b1.addEventListener('click', selectB1);
c1.addEventListener('click', selectC1);
a2.addEventListener('click', selectA2);
b2.addEventListener('click', selectB2);
c2.addEventListener('click', selectC2);
a3.addEventListener('click', selectA3);
b3.addEventListener('click', selectB3);
c3.addEventListener('click', selectC3);

clearBoardBtn.addEventListener('click', clearBoard);
optionsBtn.addEventListener('click', displayOptions);
vsCpu.addEventListener('click', chooseCPU);
vsMulti.addEventListener('click', chooseMulti);
cpuIsX.addEventListener('click', chooseCpuX);
cpuIsO.addEventListener('click', chooseCpuO);
