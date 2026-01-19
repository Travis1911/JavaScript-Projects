//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];
let body = document.getElementById("body");


//This function is for placing an X or O in a square.
function placeXOrO(squareNumber) {

    if (body.style.pointerEvents === "none") return;

    if (!selectedSquares.some(element => element.includes(squareNumber))) {

        body.style.pointerEvents = "none";

        let select = document.getElementById(squareNumber);

        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }

        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();

        if (activePlayer === 'X') {
            activePlayer = 'O';
            audio('./media/place.mp3');
            setTimeout(computersTurn, 500);
        } else {
            activePlayer = 'X';
            audio('./media/place.mp3');
            body.style.pointerEvents = "auto";
        }
    }
}


//Computer move
function computersTurn() {
    let success = false;
    let pickASquare;

    while (!success) {
        pickASquare = String(Math.floor(Math.random() * 9));

        if (!selectedSquares.some(element => element.includes(pickASquare))) {
            success = true;
        }
    }

    let square = document.getElementById(pickASquare);
    square.style.backgroundImage = 'url("images/o.png")';
    selectedSquares.push(pickASquare + 'O');

    checkWinConditions();
    activePlayer = 'X';
    body.style.pointerEvents = "auto";
}


//Win detection
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }

    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }

    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(resetGame, 800);
    }
}


//Check combinations
function arrayIncludes(a, b, c) {
    return selectedSquares.includes(a) &&
           selectedSquares.includes(b) &&
           selectedSquares.includes(c);
}


//Draw win line
function drawWinLine(x1, y1, x2, y2) {
    const canvas = document.getElementById("win-lines");
    const c = canvas.getContext("2d");
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.lineWidth = 10;
    c.strokeStyle = "red";
    c.stroke();

    audio('./media/winGame.mp3');
    setTimeout(resetGame, 1000);
}


//Reset board
function resetGame() {
    selectedSquares = [];
    document.querySelectorAll("td").forEach(td => td.style.backgroundImage = "");
    const canvas = document.getElementById("win-lines");
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    activePlayer = 'X';
    body.style.pointerEvents = "auto";
}


//Play sound
function audio(path) {
    new Audio(path).play();
}
