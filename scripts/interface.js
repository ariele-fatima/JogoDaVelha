document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    let btnNewGame = document.getElementById("newGame");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

    btnNewGame.addEventListener('click', restartGame);
});

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert("O Jogo Acabou - O Vencedor foi " + playerTime);
        }, 10)
    }else if(isDraw()){
        setTimeout(() => {
            alert("O Jogo Empatou");
        }, 10);
    };
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'>`
}

function updateSquares(){    
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = '';
        }
    })
}

function restartGame(){
    updateSquares();
    initialVariables();
}
