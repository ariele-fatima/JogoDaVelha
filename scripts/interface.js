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

        winnerLine(winnerArrayPosition);
        updateScoreboard(playerTime);        
        setTimeout(() => {
            gameOverModal(true);
        }, 500);
        
    } else if (isDraw()) {

        setTimeout(() => {
            gameOverModal(false);
        }, 500);

    };
    
    updateSquare(position);
}

function updateSquare(position) {

    let square = document.getElementById(position.toString());
    let symbol = board[position];

    square.innerHTML = `<div class='${symbol}'>`
}

function winnerLine(sequence){
    let winSquares = document.getElementById(winnerSequence[1]);

    if(sequence == 0 || sequence == 1 || sequence == 2){
        winSquares.innerHTML += "<div class='winner-horizontal-line'></div>";
    } else if (sequence == 3 || sequence == 4 || sequence == 5) {
        winSquares.innerHTML += "<div class='winner-vertical-line'></div>";
    } else if (sequence == 6) {
        winSquares.innerHTML += "<div class='winner-diagonal-line'></div>";
    } else {
        winSquares.innerHTML += "<div class='winner-diagonal-line'></div>";
        document.querySelector(".winner-diagonal-line").style.transform = ("rotate(45deg)")        
    }
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

function gameOverModal(win) {

    let gameOverMensage = document.getElementById("gameOver");
    let gameOverModal = document.getElementById("gameOverConteiner");
    
    if(win){
        gameOverMensage.innerHTML = "O Jogo Acabou - O Vencedor foi " +  playerName(playerTime);
    }else {
        gameOverMensage.innerHTML = "O Jogo Empatou";
    }

    gameOverModal.style.display = 'flex';
}

function restartGame() {
    hideFameOverModal();
    cleanSquares();
    initialVariables();
}

function hideFameOverModal(){
    let gameOverModal = document.getElementById("gameOverConteiner");
    gameOverModal.style.display = 'none';
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

function playerName(playerTime){
    return (playerTime == 0) ? "X" : "0";
}

