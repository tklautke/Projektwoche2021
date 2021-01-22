//Disc Color one = #E83151
//Disc Color two = #2DE1FC
//Game field = #97A7B3


function drawGreenSquares() {
    for (let row = 0; row < 8; row++) {
        for (let column = 0; column < 8; column++) {
            const greenSquare = document.createElement('div');
            greenSquare.style.position = 'absolute';
            greenSquare.style.height = cellSize.toString();
            greenSquare.style.width = cellSize.toString();
            greenSquare.style.backgroundColor = '#222831';
            greenSquare.style.left = `${(cellSize + gap) * column + gap}px`;
            greenSquare.style.top = `${(cellSize + gap) * row + gap}px`;
            greenSquare.setAttribute('onclick', `clickedSquare(${row},${column})`);
            blackBackground.appendChild(greenSquare);
        }
    }
}

function drawDiscs() {
    discLayer.innerHTML = '';
    for (let row = 0; row < 8; row++) {
        for (let column = 0; column < 8; column++) {
            let value = discs[row][column];
            if (value === 0) {

            } else {
                const disc = document.createElement('div');
                disc.style.position = 'absolute';
                disc.style.height = cellSize - 6;
                disc.style.width = cellSize - 6;
                disc.style.borderRadius = '50%';
                disc.style.left = `${(cellSize + gap) * column + gap + 3}px`;
                disc.style.top = `${(cellSize + gap) * row + gap + 3}px`;

                if (value === 1) {
                    disc.style.backgroundColor = 'rgba(232, 49, 81)';
                }
                if (value === 2) {
                    disc.style.backgroundColor = 'rgba(45, 225, 252)';
                }

                discLayer.appendChild(disc);
            }
        }
    }
}

function drawCanMoveLayer(){
    canMoveLayer.innerHTML = '';
    for (let row = 0; row < 8; row++) {
        for (let column = 0; column < 8; column++) {
            const value = discs[row][column];
            if (value === 0 && canClickSpot(turn, row, column)) {
                const discOutline = document.createElement('div');
                discOutline.style.position = 'absolute';
                discOutline.style.height = `${cellSize - 10}px`;
                discOutline.style.width = `${cellSize - 10}px`;
                discOutline.style.borderRadius = '50%';
                discOutline.style.left = `${(cellSize + gap) * column + gap + 3}px`;
                discOutline.style.top = `${(cellSize + gap) * row + gap + 3}px`;
                discOutline.style.zIndex = '2';

                if (turn === 1) {
                    discOutline.style.border = '2px solid rgba(232, 49, 81)';
                    discOutline.style.backgroundColor = 'rgba(232, 49, 81, 0.3)';
                }

                if (turn === 2) {
                    discOutline.style.border = '2px solid rgba(45, 225, 252)';
                    discOutline.style.backgroundColor = 'rgba(45, 225, 252, 0.3)';
                }

                discOutline.setAttribute('onclick', `clickedSquare(${row},${column})`);
                discLayer.appendChild(discOutline);
            }
        }
    }
}
