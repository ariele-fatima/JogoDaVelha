document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    let btnNewGame = document.getElementById("newGame");
    let btnResetGame = document.getElementById("resetScoreboard");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

    btnNewGame.addEventListener('click', restartGame);
    btnResetGame.addEventListener('click', resetScoreboard);
        
});

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert("O Jogo Acabou - O Vencedor foi " + playerTime);
        }, 10);

        updateScoreboard(playerTime);

    } else if (isDraw()) {

        setTimeout(() => {
            alert("O Jogo Empatou");
        }, 10);

    };
    
    updateSquare(position);
}

function updateSquare(position) {

    let square = document.getElementById(position.toString());
    let symbol = board[position];

    square.innerHTML = `<div class='${symbol}'>`
}

function cleanSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = '';
        }
    })
}

function restartGame() {
    cleanSquares();
    initialVariables();
}

function updateScoreboard(playerTime) {

    countVictors(playerTime);

    let player0 = document.getElementById("valuePlayer0");
    let player1 = document.getElementById("valuePlayer1");

    if (playerTime == 0) {
        player0.innerHTML = `: ${winsPlayer0}`;
    } else {
        player1.innerHTML = `: ${winsPlayer1}`;
    }
}

function cleanScoreboard(){

    let player0 = document.getElementById("valuePlayer0");
    let player1 = document.getElementById("valuePlayer1"); 

    player0.innerHTML = `: ${winsPlayer0}`;   
    player1.innerHTML = `: ${winsPlayer1}`;
}

function resetScoreboard(){
    initialVariablesScoreboard();
    cleanScoreboard();
}

