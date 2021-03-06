//iniciar as variaveis
let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let winsPlayer0 = 0;
let winsPlayer1 = 0;
let winnerArrayPosition;
let winnerSequence;


function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (gameOver == false) {
            playerTime = (playerTime == 0) ? 1 : 0;
        }
    }

    return gameOver;

}

function isWin() {

    for (let i = 0; i < winStates.length; i++) {
        let sequence = winStates[i];

        let position1 = sequence[0];
        let position2 = sequence[1];
        let position3 = sequence[2];

        if (board[position1] == board[position2] &&
            board[position1] == board[position3] &&
            board[position1] != '') {
            winnerSequence = winStates[i];
            winnerArrayPosition = i;
            return true;
        }
    }

    return false;
}

function isDraw() {

    var spaceFull = 0;

    for (let i = 0; i < board.length; i++) {
        if (board[i] != '') {
            spaceFull++;
        }
    }

    if (board.length == spaceFull && gameOver == false) {
        return true;
    }

    return false;
}

function initialVariables(){
    board = ['', '', '', '', '', '', '', '', '' ];
    playerTime = 0;
    gameOver = false;
}

function countVictors(playerTime){
    playerTime == 0 ? winsPlayer0 ++ : winsPlayer1 ++;    
}

function initialVariablesScoreboard(){
    winsPlayer0 = 0;
    winsPlayer1 = 0;
}