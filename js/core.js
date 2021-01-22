let blackBackground;
let gap = 2
let cellSize = 65
let discLayer;
let turn = 1;
let scoreLabel;
let gameOver = false;
let canMoveLayer;

/**
 * State of the chips:
 * 0 = there is no chip
 * 1 = there is a black chip
 * 2 = there is a white chip
 */
let discs = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
]
window.onload = function() {
    scoreLabel = document.getElementById('score');
    canMoveLayer = document.getElementById('canMoveLayer');
    blackBackground = document.getElementById('blackBackground');
    discLayer = document.getElementById('discLayer');
    blackBackground.style.width = `${cellSize * 8 + (gap * 9)}px`;
    blackBackground.style.height = `${cellSize * 8 + (gap * 9)}px`;
    drawGreenSquares();
    drawDiscs();
    drawCanMoveLayer()
}

function canClickSpot(id, row, column) {
    let affectedDiscs = getAffectedDiscs(id, row, column);
    return affectedDiscs.length !== 0;
}
function flipDiscs(affectedDiscs) {
    for (let i = 0; i < affectedDiscs.length; i++) {
        const spot = affectedDiscs[i];

        if (discs[spot.row][spot.column] === 1) {
            discs[spot.row][spot.column] = 2;
        } else {
            discs[spot.row][spot.column] = 1;
        }
    }
}

function clickedSquare(row, column) {
    if(gameOver) return;
    if (discs[row][column] !== 0) return;

    if (canClickSpot(turn, row, column) === true) {
        let affectedDiscs = getAffectedDiscs(turn, row, column);
        flipDiscs(affectedDiscs);
        discs[row][column] = turn;

        if(turn === 1 && canMove(2)) turn = 2;
        else if  (turn === 2 && canMove(1)) turn = 1;

        if (canMove(1) === false && canMove(2) === false){
            alert("Game Over");
            gameOver = true;
        }
        drawDiscs();
        drawCanMoveLayer();
        redrawScore();
    }
}

function canMove(id){
    for (let row = 0; row < 8; row++) {
        for (let column = 0; column < 8; column++) {
            if(canClickSpot(id, row, column)){
                return true
            }
        }
    }
    return false;
}

