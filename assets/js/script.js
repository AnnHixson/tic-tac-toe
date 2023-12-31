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
const winnerDisplayText = document.getElementById('winner-display-text');

// Initial Settings
// optionsContent.style.display = 'none';
// cpuOptions.style.display = 'none';
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
    if ((a1.textContent === 'X' && b1.textContent === 'X' && c1.textContent === 'X') || (a1.textContent === 'X' && b2.textContent === 'X' && c3.textContent === 'X') || (a1.textContent === 'X' && a2.textContent === 'X' && a3.textContent === 'X') || (b1.textContent === 'X' && b2.textContent === 'X' && b3.textContent === 'X') || (c1.textContent === 'X' && c2.textContent === 'X' && c3.textContent === 'X') || (c1.textContent === 'X' && b2.textContent === 'X' && a3.textContent === 'X') || (a2.textContent === 'X' && b2.textContent === 'X' && c2.textContent === 'X') || (a3.textContent === 'X' && b3.textContent === 'X' && c3.textContent === 'X')) {
        winnerDisplay.style.display = 'block';
        winnerDisplayText.textContent = 'X Wins!';
        a1.disabled = true;
        b1.disabled = true;
        c1.disabled = true;
        a2.disabled = true;
        b2.disabled = true;
        c2.disabled = true;
        a3.disabled = true;
        b3.disabled = true;
        c3.disabled = true;
    } else if ((a1.textContent === 'O' && b1.textContent === 'O' && c1.textContent === 'O') || (a1.textContent === 'O' && b2.textContent === 'O' && c3.textContent === 'O') || (a1.textContent === 'O' && a2.textContent === 'O' && a3.textContent === 'O') || (b1.textContent === 'O' && b2.textContent === 'O' && b3.textContent === 'O') || (c1.textContent === 'O' && c2.textContent === 'O' && c3.textContent === 'O') || (c1.textContent === 'O' && b2.textContent === 'O' && a3.textContent === 'O') || (a2.textContent === 'O' && b2.textContent === 'O' && c2.textContent === 'O') || (a3.textContent === 'O' && b3.textContent === 'O' && c3.textContent === 'O')) {
        winnerDisplay.style.display = 'block';
        winnerDisplayText.textContent = 'O Wins!';
        a1.disabled = true;
        b1.disabled = true;
        c1.disabled = true;
        a2.disabled = true;
        b2.disabled = true;
        c2.disabled = true;
        a3.disabled = true;
        b3.disabled = true;
        c3.disabled = true;
    } else if (a1.textContent !== '' && b1.textContent !== '' && c1.textContent !== '' && a2.textContent !== '' && b2.textContent !== '' && c2.textContent !== '' && a3.textContent !== '' && b3.textContent !== '' && c3.textContent !== '') {
        winnerDisplay.style.display = 'block';
        winnerDisplayText.textContent = 'It\'s a Tie!';
        a1.disabled = true;
        b1.disabled = true;
        c1.disabled = true;
        a2.disabled = true;
        b2.disabled = true;
        c2.disabled = true;
        a3.disabled = true;
        b3.disabled = true;
        c3.disabled = true;
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

    a1.disabled = false;
    b1.disabled = false;
    c1.disabled = false;
    a2.disabled = false;
    b2.disabled = false;
    c2.disabled = false;
    a3.disabled = false;
    b3.disabled = false;
    c3.disabled = false;

    turnCounter = 1;

    winnerDisplay.style.display = 'none';

    if (clearBoardBtn.textContent === 'Play Again (CPU is X)?') {
        cpuPlaysX();
    } else if (clearBoardBtn.textContent === 'Play Again (CPU is O)?') {
        cpuPlaysO();
    };
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

// These functions handle the CPU's turns
function cpuPlaysX() {
    if (turnCounter === 1) {
        b2.textContent = 'X';
        makeAMove();
    } else if (turnCounter === 3) {
        if ((b1.textContent === 'O') || (a2.textContent === 'O') || (c2.textContent === 'O') || (b3.textContent === 'O')) {
            a1.textContent = 'X';
            makeAMove();
        } else if ((a1.textContent === 'O') || (c1.textContent === 'O') || (a3.textContent === 'O') || (c3.textContent === 'O')) {
            if (a1.textContent === 'O') {
                c3.textContent = 'X';
                makeAMove();
            } else if (c1.textContent === 'O') {
                a3.textContent = 'X';
                makeAMove();
            } else if (a3.textContent === 'O') {
                c1.textContent = 'X';
                makeAMove(); 
            } else if (c3.textContent === 'O') {
                a1.textContent = 'X';
                makeAMove();
            }
        }
    } else if (turnCounter === 5) {
        if ((a1.textContent === 'X') && (c3.textContent === '')) {
            c3.textContent = 'X';
            makeAMove();
        } else if ((((a1.textContent === 'X') && (c3.textContent === 'O')) || ((c1.textContent === 'X') && (a3.textContent === 'O')) || ((a3.textContent === 'X') && (c1.textContent === 'O')) || ((c3.textContent === 'X') && (a1.textContent === 'O'))) && ((b1.textContent === 'O') || (a2.textContent === 'O') || (c2.textContent === 'O') || (b3.textContent === 'O'))) {
            if (a1.textContent === 'X') {
                if ((b1.textContent === 'O') || (b3.textContent === 'O')) {
                    a3.textContent = 'X';
                    makeAMove();
                } else if ((a2.textContent === 'O') || (c2.textContent === 'O')) {
                    c1.textContent = 'X';
                    makeAMove();
                }
            } else if (c1.textContent === 'X') {
                if ((b1.textContent === 'O') || (b3.textContent === 'O')) {
                    c3.textContent = 'X';
                    makeAMove();
                } else if ((a2.textContent === 'O') || (c2.textContent === 'O')) {
                    a1.textContent = 'X';
                    makeAMove();
                }
            } else if (a3.textContent === 'X') {
                if ((b1.textContent === 'O') || (b3.textContent === 'O')) {
                    a1.textContent = 'X';
                    makeAMove();
                } else if ((a2.textContent === 'O') || (c2.textContent === 'O')) {
                    c3.textContent = 'X';
                    makeAMove();
                }
            } else if (c3.textContent === 'X') {
                if ((b1.textContent === 'O') || (b3.textContent === 'O')) {
                    c1.textContent = 'X';
                    makeAMove();
                } else if ((a2.textContent === 'O') || (c2.textContent === 'O')) {
                    a3.textContent = 'X';
                    makeAMove();
                }
            }
        }
         else if ((b1.textContent === '') && (a2.textContent === '') && (c2.textContent === '') && (b3.textContent === '')) {
            if ((a1.textContent === 'O') && (a3.textContent === 'O')) {
                a2.textContent = 'X';
                makeAMove();
            } else if ((a1.textContent === 'O') && (c1.textContent === 'O')) {
                b1.textContent = 'X';
                makeAMove();
            } else if ((a3.textContent === 'O') && (c3.textContent === 'O')) {
                b3.textContent = 'X';
                makeAMove();
            } else if ((c1.textContent === 'O') && (c3.textContent === 'O')) {
                c2.textContent = 'X';
                makeAMove();
            }
         } 
    } else if (turnCounter === 7) {
        if ((a1.textContent === 'X') && (b1.textContent === '') && (c1.textContent === 'X')) {
            b1.textContent = 'X';
            makeAMove();
        } else if ((a1.textContent === 'X') && (a2.textContent === '') && (a3.textContent === 'X')) {
            a2.textContent = 'X';
            makeAMove();
        } else if ((c1.textContent === 'X') && (c2.textContent === '') && (c3.textContent === 'X')) {
            c2.textContent = 'X';
            makeAMove();
        } else if ((a3.textContent === 'X') && (b3.textContent === '') && (c3.textContent === 'X')) {
            b3.textContent = 'X';
            makeAMove();
        } else if ((a1.textContent === 'X') && (c3.textContent === '')) {
            c3.textContent = 'X';
            makeAMove();
        } else if ((c1.textContent === 'X') && (a3.textContent === '')) {
            a3.textContent = 'X';
            makeAMove();
        } else if ((a3.textContent === 'X') && (c1.textContent === '')) {
            c1.textContent = 'X';
            makeAMove();
        } else if ((c3.textContent === 'X') && (a1.textContent === '')) {
            a1.textContent = 'X';
            makeAMove();
        } else if (((a1.textContent === 'O') && (a3.textContent === 'O') && (c3.textContent === 'X')) || ((c1.textContent === 'O') && (c3.textContent === 'O') && (a3.textContent === 'X'))) {
            b1.textContent = 'X';
            makeAMove();
        } else if (((a1.textContent === 'O') && (c1.textContent === 'O') && (c3.textContent === 'X')) || ((a3.textContent === 'O') && (c3.textContent === 'O') && (c1.textContent === 'X'))) {
            a2.textContent = 'X';
            makeAMove();
        } else if (((a1.textContent === 'O') && (c1.textContent === 'O') && (a3.textContent === 'X')) || ((a3.textContent === 'O') && (c3.textContent === 'O') && (a1.textContent === 'X'))) {
            c2.textContent = 'X';
            makeAMove();
        } else if (((a1.textContent === 'O') && (a3.textContent === 'O') && (c1.textContent === 'X')) || ((c1.textContent === 'O') && (c3.textContent === 'O') && (a1.textContent === 'X'))) {
            b3.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if ((b1.textContent === 'X') && (b3.textContent === '')) {
            b3.textContent = 'X';
            makeAMove();
        } else if ((a2.textContent === 'X') && (c2.textContent === '')) {
            c2.textContent = 'X';
            makeAMove();
        } else if ((c2.textContent === 'X') && (a2.textContent === '')) {
            a2.textContent = 'X';
            makeAMove();
        } else if ((b3.textContent === 'X') && (b1.textContent === '')) {
            b1.textContent = 'X';
            makeAMove();
        } else if (a1.textContent === '') {
            a1.textContent = 'X';
            makeAMove();
        } else if (c1.textContent === '') {
            c1.textContent = 'X';
            makeAMove();
        } else if (a3.textContent === '') {
            a3.textContent = 'X';
            makeAMove();
        } else if (c3.textContent === '') {
            c3.textContent = 'X';
            makeAMove();
        }
    };
}
function cpuPlaysO() {
    if (turnCounter === 2) {
        if (b2.textContent === 'X') {
            a1.textContent = 'O';
            makeAMove();
        } else if (b2.textContent === '') {
            b2.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (b2.textContent === 'X') {
            if (b1.textContent === 'X') {
                b3.textContent = 'O';
                makeAMove();
            } else if (c1.textContent === 'X') {
                a3.textContent = 'O';
                makeAMove();
            } else if (a2.textContent === 'X') {
                c2.textContent = 'O';
                makeAMove();
            } else if (c2.textContent === 'X') {
                a2.textContent = 'O';
                makeAMove();
            } else if ((a3.textContent === 'X') || (c3.textContent === 'X')) {
                c1.textContent = 'O';
                makeAMove();
            } else if (b3.textContent === 'X') {
                b1.textContent = 'O';
                makeAMove();
            }
        } else if (b2.textContent === 'O') {
            if (a1.textContent === 'X') {
                if ((b1.textContent === 'X') || (c2.textContent === 'X')) {
                    c1.textContent = 'O';
                    makeAMove();
                } else if ((c1.textContent === 'X') || (c3.textContent === 'X')) {
                    b1.textContent = 'O';
                    makeAMove();
                } else if ((a2.textContent === 'X') || (b3.textContent === 'X')) {
                    a3.textContent = 'O';
                    makeAMove();
                } else if (a3.textContent === 'X') {
                    a2.textContent = 'O';
                    makeAMove();
                }
            } else if (b1.textContent === 'X') {
                if ((c1.textContent === 'X') || (a3.textContent === 'X') || (b3.textContent === 'X') || (c3.textContent === 'X')) {
                    a1.textContent = 'O';
                    makeAMove();
                } else if ((a2.textContent === 'X') || (c2.textContent === 'X')) {
                    c1.textContent = 'O';
                    makeAMove();
                }
            } else if (c1.textContent === 'X') {
                if (a2.textContent === 'X') {
                    a1.textContent = 'O';
                    makeAMove();
                } else if ((c2.textContent === 'X') || (b3.textContent === 'X')) {
                    c3.textContent = 'O';
                    makeAMove();
                } else if (a3.textContent === 'X') {
                    b1.textContent = 'O';
                    makeAMove();
                } else if (c3.textContent === 'X') {
                    c2.textContent = 'O';
                    makeAMove();
                }
            } else if (a2.textContent === 'X') {
                if ((c2.textContent === 'X') || (c3.textContent === 'X')) {
                    a3.textContent = 'O';
                    makeAMove();
                } else if ((a3.textContent === 'X') || (b3.textContent === 'X')) {
                    a1.textContent = 'O';
                    makeAMove();
                }
            } else if (c2.textContent === 'X') {
                if ((a3.textContent === 'X') || (c3.textContent === 'X')) {
                    c1.textContent = 'O';
                    makeAMove();
                } else if (b3.textContent === 'X') {
                    c3.textContent = 'O';
                    makeAMove();
                }
            } else if (a3.textContent === 'X') {
                if (b3.textContent === 'X') {
                    c3.textContent = 'O';
                    makeAMove();
                } else if (c3.textContent === 'X') {
                    b3.textContent = 'O';
                    makeAMove();
                }
            } else if (b3.textContent === 'X') {
                a3.textContent = 'O';
                makeAMove();
            }
        }
    } else if (turnCounter === 6) {
        if (b2.textContent === 'X') {
            if ((b1.textContent === 'X') && (b3.textContent === 'O')) {
                if ((c1.textContent === 'X') || (c3.textContent === 'X')) {
                    a3.textContent = 'O';
                    makeAMove();
                } else if (a2.textContent === 'X') {
                    c2.textContent = 'O';
                    makeAMove();
                } else if (c2.textContent === 'X') {
                    a2.textContent = 'O';
                    makeAMove();
                } else if (a3.textContent === 'X') {
                    c1.textContent = 'O';
                    makeAMove();
                }
            } else if ((c1.textContent === 'X') && (a3.textContent === 'O')) {
                if (a2.textContent === '') {
                    a2.textContent = 'O';
                    makeAMove();
                } else if (a2.textContent === 'X') {
                    c2.textContent = 'O';
                    makeAMove();
                }
            } else if ((a2.textContent === 'X') && (c2.textContent === 'O')) {
                if (b1.textContent === 'X') {
                    b3.textContent = 'O';
                    makeAMove();
                } else if (c1.textContent === 'X') {
                    a3.textContent = 'O';
                    makeAMove();
                } else if ((a3.textContent === 'X') || (c3.textContent === 'X')) {
                    c1.textContent = 'O';
                    makeAMove();
                } else if (b3.textContent === 'X') {
                    b1.textContent = 'O';
                    makeAMove();
                }
            } else if ((c2.textContent === 'X') && (a2.textContent === 'O')) {
                if (a3.textContent === '') {
                    a3.textContent = 'O';
                    makeAMove();
                } else if (a3.textContent === 'X') {
                    c1.textContent = 'O';
                    makeAMove();
                }
            } else if (((a3.textContent === 'X') || (c3.textContent === 'X')) && (c1.textContent === 'O')) {
                if (b1.textContent === '') {
                    b1.textContent = 'O';
                    makeAMove();
                } else if (b1.textContent === 'X') {
                    b3.textContent = 'O';
                    makeAMove();
                }
            } else if ((b3.textContent === 'X') && (b1.textContent === 'O')) {
                if (c1.textContent === '') {
                    c1.textContent = 'O';
                    makeAMove();
                } else if (c1.textContent === 'X') {
                    a3.textContent = 'O';
                    makeAMove();
                }
            }
        } else if (b2.textContent === 'O') {
            if (a1.textContent === 'X') {
                if (b1.textContent === 'X') {
                    if ((a2.textContent === 'X') || (b3.textContent === 'X')) {
                        if (a3.textContent === '') {
                            a3.textContent = 'O';
                            makeAMove();
                        } else if (c1.textContent === '') {
                            c1.textContent = 'O';
                            makeAMove();
                        }
                    } else if ((c2.textContent === 'X') || (c3.textContent === 'X')) {
                        a3.textContent = 'O';
                            makeAMove();
                    } else if (a3.textContent === 'X') {
                        if (a2.textContent === 'O') {
                            c2.textContent = 'O';
                            makeAMove();
                        } else if (a2.textContent === '') {
                            a2.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (c1.textContent === 'X') {
                    if ((a2.textContent === 'X') || (c2.textContent === 'X')) {
                        if (b1.textContent === 'O') {
                            b3.textContent = 'O';
                            makeAMove();
                        } else if (b1.textContent === '') {
                            b1.textContent = 'O';
                            makeAMove();
                        }
                    } else if (a3.textContent === 'X') {
                        if (b1.textContent === 'O') {
                            b3.textContent = 'O';
                            makeAMove();
                        } else if (a2.textContent === 'O') {
                            c2.textContent = 'O';
                            makeAMove();
                        }
                    } else if (b3.textContent === 'X') {
                        if (b1.textContent === 'O') {
                            a2.textContent = 'O';
                            makeAMove();
                        } else if (b1.textContent === '') {
                            a2.textContent = 'O';
                            makeAMove();
                        }
                    } else if (c3.textContent === 'X') {
                        if (b1.textContent === 'O') {
                            b3.textContent = 'O';
                            makeAMove();
                        } else if (c2.textContent === 'O') {
                            a2.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (a2.textContent === 'X') {
                    if (c2.textContent === 'X') {
                        if (a3.textContent === 'O') {
                            c1.textContent = 'O';
                            makeAMove();
                        } else if (c1.textContent === 'O') {
                            a3.textContent = 'O';
                            makeAMove();
                        }
                    } else if (b3.textContent === 'X') {
                        c1.textContent = 'O';
                        makeAMove();
                    } else if (c3.textContent === 'X') {
                        if (a3.textContent === 'O') {
                            c1.textContent = 'O';
                            makeAMove();
                        } else if (b1.textContent === 'O') {
                            b3.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (c2.textContent === 'X') {
                    if (a3.textContent === 'X') {
                        if (a2.textContent === 'O') {
                            b1.textContent = 'O';
                            makeAMove();
                        } else if (a2.textContent === '') {
                            a2.textContent = 'O';
                            makeAMove();
                        }
                    } else if (b3.textContent === 'X') {
                        if (c1.textContent === 'O') {
                            a3.textContent = 'O';
                            makeAMove();
                        } else if (c1.textContent === '') {
                            c1.textContent = 'O';
                            makeAMove();
                        }
                    } else if (c3.textContent === 'X') {
                        if (c1.textContent === 'O') {
                            a3.textContent = 'O';
                            makeAMove();
                        } else if (b1.textContent === 'O') {
                            b3.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (a3.textContent === 'X') {
                    if (b3.textContent === 'X') {
                        if (a2.textContent === 'O') {
                            c2.textContent = 'O';
                            makeAMove();
                        } else if (a2.textContent === '') {
                            a2.textContent = 'O';
                            makeAMove();
                        }
                    } else if (c3.textContent === 'X') {
                        if (a2.textContent === 'O') {
                            c2.textContent = 'O';
                            makeAMove();
                        } else if (b1.textContent === 'O') {
                            b3.textContent = 'O';
                            makeAMove();
                        } else if (b3.textContent === 'O') {
                            b1.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (b3.textContent === 'X') {
                    if (a3.textContent === 'O') {
                        c1.textContent = 'O';
                        makeAMove();
                    } else if (a3.textContent === '') {
                        a3.textContent = 'O';
                        makeAMove();
                    }
                }
            } else if (b1.textContent === 'X') {
                if (c1.textContent === 'X') {
                    if ((a2.textContent === 'X') || (a3.textContent === 'X')) {
                        c3.textContent = 'O';
                        makeAMove();
                    } else if ((c2.textContent === 'X') || (b3.textContent === 'X')) {
                        if (a1.textContent === 'O') {
                            c3.textContent = 'O';
                            makeAMove();
                        } else if (c3.textContent === 'O') {
                            a1.textContent = 'O';
                            makeAMove();
                        }
                    } else if (c3.textContent === 'X') {
                        if (c2.textContent === 'O') {
                            a2.textContent = 'O';
                            makeAMove();
                        } else if (c2.textContent === '') {
                            c2.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (a2.textContent === 'X') {
                    if (c2.textContent === 'X') {
                        if (c1.textContent === 'O') {
                            a3.textContent = 'O';
                            makeAMove();
                        } else if (a3.textContent === 'O') {
                            c1.textContent = 'O';
                            makeAMove();
                        }
                    } else if (a3.textContent === 'X') {
                        if (a1.textContent === 'O') {
                            c3.textContent = 'O';
                            makeAMove();
                        } else if (a1.textContent === '') {
                            a1.textContent = 'O';
                            makeAMove();
                        }
                    } else if (b3.textContent === 'X') {
                        if (a1.textContent === 'O') {
                            c3.textContent = 'O';
                            makeAMove();
                        } else if (c1.textContent === 'O') {
                            a3.textContent = 'O';
                            makeAMove();
                        }
                    } else if (c3.textContent === 'X') {
                        if (a3.textContent === 'O') {
                            c1.textContent = 'O';
                            makeAMove();
                        } else if (a3.textContent === '') {
                            a3.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (c2.textContent === 'X') {
                    if (a3.textContent === 'X') {
                        if (a1.textContent === 'O') {
                            c3.textContent = 'O';
                            makeAMove();
                        } else if (c1.textContent === 'O') {
                            a1.textContent = 'O';
                            makeAMove();
                        }
                    } else if (b3.textContent === 'X') {
                        if (c1.textContent === 'O') {
                            a3.textContent = 'O';
                            makeAMove();
                        } else if (a1.textContent === 'O') {
                            c3.textContent = 'O';
                            makeAMove();
                        } else if (c3.textContent === 'O') {
                            a1.textContent = 'O';
                            makeAMove();
                        }
                    } else if (c3.textContent === 'X') {
                        if (c1.textContent === 'O') {
                            a3.textContent = 'O';
                            makeAMove();
                        } else if (c1.textContent === '') {
                            c1.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (a3.textContent === 'X') {
                    if (b3.textContent === 'X') {
                        if (a1.textContent === 'O') {
                            c3.textContent = 'O';
                            makeAMove();
                        } else if (c3.textContent === 'O') {
                            a1.textContent = 'O';
                            makeAMove();
                        }
                    } else if (c3.textContent === 'X') {
                        if (b3.textContent === 'O') {
                            a2.textContent = 'O';
                            makeAMove();
                        } else if (b3.textContent === '') {
                            b3.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (b3.textContent === 'X') {
                    if (a3.textContent === 'O') {
                        c1.textContent = 'O';
                        makeAMove();
                    } else if (a3.textContent === '') {
                        a3.textContent = 'O';
                        makeAMove();
                    }
                }
            } else if (c1.textContent === 'X') {
                if (a2.textContent === 'X') {
                    if (c2.textContent === 'X') {
                        if (a3.textContent === 'O') {
                            a1.textContent = 'O';
                            makeAMove();
                        } else if (c3.textContent === '') {
                            c3.textContent = 'O';
                            makeAMove();
                        }
                    } else if (a3.textContent === 'X') {
                        if (a1.textContent === 'O') {
                            c3.textContent = 'O';
                            makeAMove();
                        } else if (b1.textContent === 'O') {
                            b3.textContent = 'O';
                            makeAMove();
                        }
                    } else if (b3.textContent === 'X') {
                        if (a1.textContent === 'O') {
                            c3.textContent = 'O';
                            makeAMove();
                        } else if (c3.textContent === 'O') {
                            a1.textContent = 'O';
                            makeAMove();
                        }
                    } else if (c3.textContent === 'X') {
                        if (c2.textContent === 'O') {
                            b1.textContent = 'O';
                            makeAMove();
                        } else if (c2.textContent === '') {
                            c2.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (c2.textContent === 'X') {
                    if (a3.textContent === 'X') {
                        if (c3.textContent === 'O') {
                            a1.textContent = 'O';
                            makeAMove();
                        } else if (b1.textContent === 'O') {
                            b3.textContent = 'O';
                            makeAMove();
                        }
                    } else if (b3.textContent === 'X') {
                        a1.textContent = 'O';
                        makeAMove();
                    }
                } else if (a3.textContent === 'X') {
                    if (b3.textContent === 'X') {
                        if (c3.textContent === 'O') {
                            a1.textContent = 'O';
                            makeAMove();
                        } else if (c3.textContent === '') {
                            c3.textContent = 'O';
                            makeAMove();
                        }
                    } else if (c3.textContent === 'X') {
                        if (b1.textContent === 'O') {
                            b3.textContent = 'O';
                            makeAMove();
                        } else if (b3.textContent === 'O') {
                            b1.textContent = 'O';
                            makeAMove();
                        } else if (c2.textContent === 'O') {
                            a2.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (b3.textContent === 'X') {
                    if (c2.textContent === 'O') {
                        a2.textContent = 'O';
                        makeAMove();
                    } else if (c2.textContent === '') {
                        c2.textContent = 'O';
                        makeAMove();
                    }
                }
            } else if (a2.textContent === 'X') {
                if (c2.textContent === 'X') {
                    if (a3.textContent === 'X') {
                        if (a1.textContent === 'O') {
                            c3.textContent = 'O';
                            makeAMove();
                        } else if (a1.textContent === '') {
                            a1.textContent = 'O';
                            makeAMove();
                        }
                    } else if (b3.textContent === 'X') {
                        if (a3.textContent === 'O') {
                            c1.textContent = 'O';
                            makeAMove();
                        } else if (a1.textContent === 'O') {
                            c3.textContent = 'O';
                            makeAMove();
                        } else if (c3.textContent === 'O') {
                            a1.textContent = 'O';
                            makeAMove();
                        }
                    } else if (c3.textContent === 'X') {
                        if (c1.textContent === 'O') {
                            a3.textContent = 'O';
                            makeAMove();
                        } else if (a3.textContent === 'O') {
                            c1.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (a3.textContent === 'X') {
                    if (b3.textContent === 'X') {
                        if (a1.textContent === 'O') {
                            c3.textContent = 'O';
                            makeAMove();
                        } else if (c3.textContent === 'O') {
                            a1.textContent = 'O';
                            makeAMove();
                        }
                    } else if (c3.textContent === 'X') {
                        if (b3.textContent === 'O') {
                            b1.textContent = 'O';
                            makeAMove();
                        } else if (b3.textContent === '') {
                            b3.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (b3.textContent === 'X') {
                    if (a3.textContent === 'O') {
                        c1.textContent = 'O';
                        makeAMove();
                    } else if (a3.textContent === '') {
                        a3.textContent = 'O';
                        makeAMove();
                    }
                }
            } else if (c2.textContent === 'X') {
                if (a3.textContent === 'X') {
                    if (b3.textContent === 'X') {
                        if (c3.textContent === 'O') {
                            a1.textContent = 'O';
                            makeAMove();
                        } else if (c3.textContent === '') {
                            c3.textContent = 'O';
                            makeAMove();
                        }
                    } else if (c3.textContent === 'X') {
                        if (b3.textContent === 'O') {
                            b1.textContent = 'O';
                            makeAMove();
                        } else if (b3.textContent === '') {
                            b3.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (b3.textContent === 'X') {
                    if (c1.textContent === 'O') {
                        a3.textContent = 'O';
                        makeAMove();
                    } else if (a3.textContent === 'O') {
                        c1.textContent = 'O';
                        makeAMove();
                    }
                }
            }
        }
    } else if (turnCounter === 8) {
        if (b2.textContent === 'X') {
            if ((b1.textContent === 'X') && (b3.textContent === 'O')) {
                if (c1.textContent === 'X') {
                    if (a2.textContent === 'X') {
                        c3.textContent = 'O';
                        makeAMove();
                    } else if (a2.textContent === '') {
                        a2.textContent = 'O';
                        makeAMove();
                    }
                } else if (a2.textContent === 'X') {
                    if (c1.textContent === 'X') {
                        a3.textContent = 'O';
                        makeAMove();
                    } else if (c1.textContent === '') {
                        c1.textContent = 'O';
                        makeAMove();
                    }
                } else if (c2.textContent === 'X') {
                    if (a3.textContent === 'X') {
                        c1.textContent = 'O';
                        makeAMove();
                    } else if (a3.textContent === '') {
                        a3.textContent = 'O';
                        makeAMove();
                    }
                } else if (a3.textContent === 'X') {
                    if (a2.textContent === 'X') {
                        c2.textContent = 'O';
                        makeAMove();
                    } else if (a2.textContent === '') {
                        a2.textContent = 'O';
                        makeAMove();
                    }
                } else if (c3.textContent === 'X') {
                    if (a2.textContent === 'X') {
                        c2.textContent = 'O';
                        makeAMove();
                    } else if (a2.textContent === '') {
                        a2.textContent = 'O';
                        makeAMove();
                    }  
                }
            } else if ((c1.textContent === 'X') && (a3.textContent === 'O')) {
                if (a2.textContent === 'X') {
                    if (b1.textContent === 'X') {
                        b3.textContent = 'O';
                        makeAMove();
                    } else if (b1.textContent === '') {
                        b1.textContent = 'O';
                        makeAMove();
                    }
                } else if (b3.textContent === 'X') {
                    if (a2.textContent === 'X') {
                        c2.textContent = 'O';
                        makeAMove();
                    } else if (a2.textContent === '') {
                        a2.textContent = 'O';
                        makeAMove();
                    }
                }
            } else if ((a2.textContent === 'X') && (c2.textContent === 'O')) {
                if (a3.textContent === 'X') {
                    if (c3.textContent === 'X') {
                        b1.textContent = 'O';
                        makeAMove();
                    } else if (c3.textContent === '') {
                        c3.textContent = 'O';
                        makeAMove();
                    }
                } else if (b3.textContent === 'X') {
                    if (c1.textContent === 'X') {
                        a3.textContent = 'O';
                        makeAMove();
                    } else if (c1.textContent === '') {
                        c1.textContent = 'O';
                        makeAMove();
                    }
                } else if (c3.textContent === 'X') {
                    if (b1.textContent === 'X') {
                        b3.textContent = 'O';
                        makeAMove();
                    } else if (b1.textContent === '') {
                        b1.textContent = 'O';
                        makeAMove();
                    }
                }
            } else if ((c2.textContent === 'X') && (a2.textContent === 'O')) {
                if (a3.textContent === 'X') {
                    if (b1.textContent === 'X') {
                        b3.textContent = 'O';
                        makeAMove();
                    } else if (b1.textContent === '') {
                        b1.textContent = 'O';
                        makeAMove();
                    }
                }
            }
        } else if (b2.textContent === 'O') {
            if (a1.textContent === 'X') {
                if (b1.textContent === 'X') {
                    if (c2.textContent === 'X') {
                        if (a3.textContent === 'X') {
                            c3.textContent = 'O';
                            makeAMove();
                        } else if (b3.textContent === 'X') {
                            a3.textContent = 'O';
                            makeAMove();
                        }
                    } else if (a3.textContent === 'X') {
                        c2.textContent = 'O';
                            makeAMove();
                    }
                } else if (c1.textContent === 'X') {
                    if (a2.textContent === 'X') {
                        if (c2.textContent === 'X') {
                            b3.textContent = 'O';
                            makeAMove();
                        } else if (b3.textContent === 'X') {
                            if (a3.textContent === 'O') {
                                c3.textContent = 'O';
                                makeAMove();
                            } else if (a3.textContent === '') {
                                a3.textContent = 'O';
                                makeAMove();
                            }
                        } else if (c3.textContent === 'X') {
                            if (b1.textContent === 'O') {
                                b3.textContent = 'O';
                                makeAMove();
                            } else if (b1.textContent === '') {
                                b1.textContent = 'O';
                                makeAMove();
                            }
                        }
                    } else if (c2.textContent === 'X') {
                        if (a3.textContent === 'X') {
                            b3.textContent = 'O';
                            makeAMove();
                        } else if (b3.textContent === 'X') {
                            if (c3.textContent === 'O') {
                                a3.textContent = 'O';
                                makeAMove();
                            } else if (c3.textContent === '') {
                                c3.textContent = 'O';
                                makeAMove();
                            }
                        }
                    } else if (a3.textContent === 'X') {
                        if (a2.textContent === 'O') {
                            c2.textContent = 'O';
                            makeAMove();
                        } else if (a2.textContent === '') {
                            a2.textContent = 'O';
                            makeAMove();
                        }
                    } else if (b3.textContent === 'X') {
                        if (c2.textContent === 'O') {
                            a2.textContent = 'O';
                            makeAMove();
                        } else if (c2.textContent === '') {
                            c2.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (a2.textContent === 'X') {
                    if (a3.textContent === 'O') {
                        c1.textContent = 'O';
                        makeAMove();
                    } else if (a3.textContent === '') {
                        a3.textContent = 'O';
                        makeAMove();
                    }
                } else if (c2.textContent === 'X') {
                    if (a3.textContent === 'X') {
                        if (b3.textContent === 'X') {
                            if ((a2.textContent === 'O') && (c3.textContent === '')) {
                                c3.textContent = 'O';
                                makeAMove();
                            } else if ((a2.textContent === 'O') && (c3.textContent === 'O')) {
                                c1.textContent = 'O';
                                makeAMove();
                            } else if (a2.textContent === '') {
                                a2.textContent = 'O';
                                makeAMove();
                            }
                        } else if (c3.textContent === 'X') {
                            if (b3.textContent === 'O') {
                                b1.textContent = 'O';
                                makeAMove();
                            } else if (b3.textContent === '') {
                                b3.textContent = 'O';
                                makeAMove();
                            }
                        }
                    } else if (b3.textContent === 'X') {
                        c1.textContent = 'O';
                        makeAMove();
                    }
                }
            } else if (b1.textContent === 'X') {
                if (c1.textContent === 'X') {
                    if (a2.textContent === 'X') {
                        if (c2.textContent === 'X') {
                            b3.textContent = 'O';
                            makeAMove();
                        } else if (c3.textContent === 'X') {
                            if (c2.textContent === '') {
                                c2.textContent = 'O';
                                makeAMove();
                            } else if ((a1.textContent === 'O') && (a3.textContent === '')) {
                                a3.textContent = 'O';
                                makeAMove();
                            } else if ((a3.textContent === 'O') && (a1.textContent === '')) {
                                a1.textContent = 'O';
                                makeAMove();
                            }
                        }
                    } else if (a3.textContent === 'X') {
                        if (c2.textContent === 'O') {
                            a2.textContent = 'O';
                            makeAMove();
                        } else if (c2.textContent === '') {
                            c2.textContent = 'O';
                            makeAMove();
                        }
                    } else if (b3.textContent === 'X') {
                        a2.textContent = 'O';
                        makeAMove();
                    }
                } else if (a2.textContent === 'X') {
                    if (c2.textContent === 'X') {
                        if (a3.textContent === 'X') {
                            c3.textContent = 'O';
                            makeAMove();
                        } else if (c3.textContent === 'X') {
                            if (c1.textContent === 'O') {
                                a3.textContent = 'O';
                                makeAMove();
                            } else if (c1.textContent === '') {
                                c1.textContent = 'O';
                                makeAMove();
                            }
                        }
                    } else if (a3.textContent === 'X') {
                        if (b3.textContent === 'X') {
                            c3.textContent = 'O';
                            makeAMove();
                        } else if (c3.textContent === 'X') {
                            if (c1.textContent === 'O') {
                                b3.textContent = 'O';
                                makeAMove();
                            } else if (c1.textContent === '') {
                                c1.textContent = 'O';
                                makeAMove();
                            }
                        }
                    } else if (b3.textContent === 'X') {
                        c1.textContent = 'O';
                        makeAMove();
                    }
                } else if (c2.textContent === 'X') {
                    if (a3.textContent === 'X') {
                        if (b3.textContent === 'X') {
                            if (a1.textContent === 'O') {
                                c3.textContent = 'O';
                                makeAMove();
                            } else if (a1.textContent === '') {
                                a1.textContent = 'O';
                                makeAMove();
                            }
                        } else if (c3.textContent === 'X') {
                            if (b3.textContent === '') {
                                b3.textContent = 'O';
                                makeAMove();
                            } else if (c1.textContent === '') {
                                c1.textContent = 'O';
                                makeAMove();
                            } else if ((a1.textContent === '') && (a2.textContent === '')) {
                                a1.textContent = 'O';
                                makeAMove();
                            }
                        }
                    } else if (b3.textContent === 'X') {
                        if (c1.textContent === 'O') {
                            a3.textContent = 'O';
                            makeAMove();
                        } else if (c1.textContent === '') {
                            c1.textContent = 'O';
                            makeAMove();
                        }
                    }
                }
            } else if (c1.textContent === 'X') {
                if (a2.textContent === 'X') {
                    if (c2.textContent === 'X') {
                        a1.textContent = 'O';
                        makeAMove();
                    } else if (a3.textContent === 'X') {
                        if (b3.textContent === 'X') {
                            a1.textContent = 'O';
                            makeAMove();
                        } else if (c3.textContent === 'X') {
                            if (b3.textContent === 'O') {
                                b1.textContent = 'O';
                                makeAMove();
                            } else if (b3.textContent === '') {
                                b3.textContent = 'O';
                                makeAMove();
                            }
                        }
                    } else if (b3.textContent === 'X') {
                        if (a3.textContent === '') {
                            a3.textContent = 'O';
                            makeAMove();
                        } else if ((a3.textContent === 'O') && (a1.textContent === '')) {
                            a1.textContent = 'O';
                            makeAMove();
                        } else if ((a3.textContent === 'O') && (a1.textContent === 'O')) {
                            c2.textContent = 'O';
                            makeAMove();
                        }
                    }
                } else if (c2.textContent === 'X') {
                    a1.textContent = 'O';
                    makeAMove();
                }
            } else if (a2.textContent === 'X') {
                if (a3.textContent === 'X') {
                    if (b3.textContent === 'X') {
                        if (a1.textContent === 'O') {
                            c3.textContent = 'O';
                            makeAMove();
                        } else if (a1.textContent === '') {
                            a1.textContent = 'O';
                            makeAMove();
                        }
                    } else if (c3.textContent === 'X') {
                        b1.textContent = 'O';
                        makeAMove();
                    }
                } else if (b3.textContent === 'X') {
                    c1.textContent = 'O';
                        makeAMove();
                }
            }
        }
    };
}

// These functions set whether 'X' or 'O' will appear in the selected space and trigger the CPU's turn if 'VS CPU' is selected
function selectA1(event) {
    event.preventDefault();

    if (turnCounter === 1) {
        if (a1.textContent === '') {
            a1.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (a1.textContent === '') {
            a1.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (a1.textContent === '') {
            a1.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (a1.textContent === '') {
            a1.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (a1.textContent === '') {
            a1.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (a1.textContent === '') {
            a1.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (a1.textContent === '') {
            a1.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (a1.textContent === '') {
            a1.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (a1.textContent === '') {
            a1.textContent = 'X';
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
            b1.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (b1.textContent === '') {
            b1.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (b1.textContent === '') {
            b1.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (b1.textContent === '') {
            b1.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (b1.textContent === '') {
            b1.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (b1.textContent === '') {
            b1.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (b1.textContent === '') {
            b1.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (b1.textContent === '') {
            b1.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (b1.textContent === '') {
            b1.textContent = 'X';
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
            c1.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (c1.textContent === '') {
            c1.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (c1.textContent === '') {
            c1.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (c1.textContent === '') {
            c1.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (c1.textContent === '') {
            c1.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (c1.textContent === '') {
            c1.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (c1.textContent === '') {
            c1.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (c1.textContent === '') {
            c1.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (c1.textContent === '') {
            c1.textContent = 'X';
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
            a2.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (a2.textContent === '') {
            a2.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (a2.textContent === '') {
            a2.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (a2.textContent === '') {
            a2.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (a2.textContent === '') {
            a2.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (a2.textContent === '') {
            a2.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (a2.textContent === '') {
            a2.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (a2.textContent === '') {
            a2.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (a2.textContent === '') {
            a2.textContent = 'X';
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
            b2.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (b2.textContent === '') {
            b2.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (b2.textContent === '') {
            b2.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (b2.textContent === '') {
            b2.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (b2.textContent === '') {
            b2.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (b2.textContent === '') {
            b2.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (b2.textContent === '') {
            b2.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (b2.textContent === '') {
            b2.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (b2.textContent === '') {
            b2.textContent = 'X';
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
            c2.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (c2.textContent === '') {
            c2.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (c2.textContent === '') {
            c2.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (c2.textContent === '') {
            c2.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (c2.textContent === '') {
            c2.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (c2.textContent === '') {
            c2.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (c2.textContent === '') {
            c2.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (c2.textContent === '') {
            c2.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (c2.textContent === '') {
            c2.textContent = 'X';
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
            a3.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (a3.textContent === '') {
            a3.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (a3.textContent === '') {
            a3.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (a3.textContent === '') {
            a3.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (a3.textContent === '') {
            a3.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (a3.textContent === '') {
            a3.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (a3.textContent === '') {
            a3.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (a3.textContent === '') {
            a3.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (a3.textContent === '') {
            a3.textContent = 'X';
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
            b3.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (b3.textContent === '') {
            b3.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (b3.textContent === '') {
            b3.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (b3.textContent === '') {
            b3.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (b3.textContent === '') {
            b3.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (b3.textContent === '') {
            b3.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (b3.textContent === '') {
            b3.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (b3.textContent === '') {
            b3.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (b3.textContent === '') {
            b3.textContent = 'X';
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
            c3.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 2) {
        if (c3.textContent === '') {
            c3.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 3) {
        if (c3.textContent === '') {
            c3.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 4) {
        if (c3.textContent === '') {
            c3.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 5) {
        if (c3.textContent === '') {
            c3.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 6) {
        if (c3.textContent === '') {
            c3.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 7) {
        if (c3.textContent === '') {
            c3.textContent = 'X';
            makeAMove();
        }
    } else if (turnCounter === 8) {
        if (c3.textContent === '') {
            c3.textContent = 'O';
            makeAMove();
        }
    } else if (turnCounter === 9) {
        if (c3.textContent === '') {
            c3.textContent = 'X';
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

    // cpuOptions.style.display = 'block';   
}
function chooseMulti(event) {
    event.preventDefault();

    vsCPUSelected = false;
    vsMultiSelected = true;
    cpuIsXSelected = false;
    cpuIsOSelected = false;

    clearBoardBtn.textContent = "Clear Board";

    // cpuOptions.style.display = 'none';
}
function chooseCpuX(event) {
    event.preventDefault();

    vsCPUSelected = true;
    vsMultiSelected = false;
    cpuIsXSelected = true;
    cpuIsOSelected = false;
    
    clearBoardBtn.textContent = "Play Again (CPU is X)?";
    clearBoard(event);

    cpuPlaysX();
}
function chooseCpuO(event) {
    event.preventDefault();

    vsCPUSelected = true;
    vsMultiSelected = false;
    cpuIsXSelected = false;
    cpuIsOSelected = true;

    clearBoardBtn.textContent = "Play Again (CPU is O)?";
    clearBoard(event);

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
// optionsBtn.addEventListener('click', displayOptions);
vsCpu.addEventListener('click', chooseCPU);
vsMulti.addEventListener('click', chooseMulti);
cpuIsX.addEventListener('click', chooseCpuX);
cpuIsO.addEventListener('click', chooseCpuO);
