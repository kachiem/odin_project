// rock-paper-scissors in javascipt
// author: kachiem



function computerPlay() {
    // returns computer's move 
    let int = getRandomInt(3);
    let moves = ["rock", "paper", "scissors"];

    if (int === 0) {
        return moves[0];
    } 
    else if (int === 1) {
        return moves[1];
    } 
    else {
        return moves[2];
    }
}