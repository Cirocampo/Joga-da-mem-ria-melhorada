board = ['', '', '', '', '', '', '', '', ''];
player_time = 0;
symbols = ['x', 'o'];
game_over = false;
let p1 = document.getElementById('player_1');
let p2 = document.getElementById('player_2');

// Essa função vai diferenciar os jogadores

function handle_move(positon) {

    if (game_over == true){
        return
    }

    if(board[positon] == ''){
        board[positon] = symbols[player_time];

        game_over = win_condition()

        if(player_time == 0){
            player_time = 1;
        } else {
            player_time = 0;
        }
    }
    
    return game_over;
}

function win_condition(){

    let win_combination = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [6, 4, 2],
    ]

    for(let i = 0; i < win_combination.length; i++){
        let seq = win_combination[i];

        let seq0 = seq[0];
        let seq1 = seq[1];
        let seq2 = seq[2];

        if(board[seq0] == board[seq1] && board[seq0] == board[seq2] && board[seq0] != ''){
            return true
        }
    }

    return false
}