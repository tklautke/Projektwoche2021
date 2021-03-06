function redrawScore() {
    let blackChip = 0;
    let whiteChip = 0;

    for (let row = 0; row < 8; row++) {
        for (let column = 0; column < 8; column++) {
            const value = discs[row][column];
            if (value === 1) blackChip += 1;
            else if (value === 2) whiteChip += 1;
        }
    }

    if(blackChip + whiteChip === 64) {
        console.log("In")
        if (blackChip < whiteChip) {
            if(confirm(`Player "${playerTwo}" has won \nPlease press "ok" to start a new game`)){
                location.reload();
            }
        } else if (blackChip > whiteChip) {
            if(confirm(`Player "${playerOne}" has won \nPlease press "ok" to start a new game`)){
                location.reload();
            }
        } else if (blackChip === whiteChip) {
            if(confirm(`It's a draw \n Please press "ok" to start a new game`)){
                location.reload();
            }
        }
    }

    scoreLabel.innerHTML = `${playerOne}: ${blackChip} - ${playerTwo}: ${whiteChip}`
}
