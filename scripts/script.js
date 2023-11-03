addEventListener("DOMContentLoaded",() => {
    let squares = document.querySelectorAll(".square");
    
    squares.forEach((square) => {

        square.addEventListener('click', handle_click);

    })
})

function to_board(){
    let presentation = document.getElementById('head');
    let board = document.getElementById("board_game");
    board.style.display = 'flex'
    presentation.style.display = 'none'
    let round_inseption = document.getElementById("player_round");
    round_inseption.innerHTML = `<h3>Rodada de ${p1.value}</h3>`

}



/* essa função é a callback dentro do primeiro evento, o parâmetro event é o elemento que fez o
DOM event ser ativado, pegamoso target do parâmetro e dps id desse evento, após isso chamamos
as duas funções a handle_move */
function handle_click(event) {
    let sqr = event.target;
    let positon = sqr.id;
    let players = [p1.value, p2.value]
    let player_round = players[player_time];
    let round_inseption = document.getElementById("player_round");
    round_inseption.innerHTML = `<h3>Rodada de ${player_round}</h3>`

     if(handle_move(positon)){
         setTimeout(() => {
             let winner;
             if(player_time == 1){
                 winner = p1.value;
             } else {
                 winner = p2.value;
             }
             let resultado = document.getElementById("resultado");
             resultado.style.display = 'flex'
             resultado.addEventListener('click', reset)
             resultado.innerHTML = `<h1>O jogador ${winner} ganhou o jogo</h1>
             <button class="start" id="sim">Restart</button>`
   
         }, 1)
     }    
     
     update_squares();
}

function update_squares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        position = square.id;
        let symbol = board[position];
    
        if (symbol != ''){
            square.innerHTML = '';
            square.innerHTML = `<div class="${symbol}"></div>`
        } 
    })
}

function reset(){
    let resultado = document.getElementById("resultado");
     resultado.style.display = 'none'
    const squares = document.querySelectorAll(".square");
    let round_inseption = document.getElementById("player_round");

    round_inseption.innerHTML = ''
    round_inseption.innerHTML = `<h3>Rodada de ${p1.value}</h3>`
    
    for (const square of squares) {
    square.innerHTML = "";
    }
    board = ['', '', '', '', '', '', '', '', '', ];
    player_time = 0;
    game_over = false;
}