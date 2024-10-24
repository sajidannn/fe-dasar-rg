function rockPaperScissor(player1, player2) {
  let player1Win = false;
  let player2Win = false;

  if (player1 == 'scissor' && player2 == 'paper') {
    player1Win = true;
  } else if (player1 == 'rock' && player2 == 'scissor') {
    player1Win = true;
  } else if (player1 == 'paper' && player2 == 'rock') {
    player1Win = true;
  } else if (player1 == player2) {
    return 'Draw!'
  } else {
    player2Win = true;
  }

  if (player1Win) {
    return 'Player 1 Won!'
  } else if (player2Win) {
    return 'Player 2 Won!'
  }

}

console.log(rockPaperScissor('scissor', 'paper')); // "Player 1 Won!"
console.log(rockPaperScissor('rock', 'paper')); // "Player 2 Won!"
console.log(rockPaperScissor('paper', 'paper')); // "Draw!"
console.log(rockPaperScissor('rock', 'rock')); // "Draw!"

module.exports = rockPaperScissor;
