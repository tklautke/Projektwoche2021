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
    scoreLabel.innerHTML = `${playerOne}: ${blackChip} - ${playerTwo}: ${whiteChip}`
}
