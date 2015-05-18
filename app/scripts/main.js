'use strict';

var buttons = [button1, button2, button3,
               button4, button5, button6,
               button7, button8, button9];

var gameover = false;

function checkCombination(b1, b2, b3) {
  if (b1.innerHTML !== '' && b1.innerHTML === b2.innerHTML && b1.innerHTML === b3.innerHTML) {
    gameover = true;

    // action item to animate when winner activated
    b1.style.backgroundColor = 'limeGreen';
    b2.style.backgroundColor = 'limeGreen';
    b3.style.backgroundColor = 'limeGreen';
    // add toggle and modal popup to determine winner
    alert('YOU WIN!!!!');
  }
}

// checks for winner on rows, columns, and diagonals, sorted in an array
function checkWin() {
  checkCombination(button1, button2, button3);
  checkCombination(button4, button5, button6);
  checkCombination(button7, button8, button9);
  checkCombination(button1, button4, button7);
  checkCombination(button2, button5, button8);
  checkCombination(button3, button6, button9);
  checkCombination(button1, button5, button9);
  checkCombination(button3, button5, button7);
}

function pickSquare() {
  /*jshint validthis: true */
  if (gameover || this.innerHTML !== '') {
    return;
  }

  this.innerHTML = selectTurn.value;
//allows the square to identify whose turn it is, with if/else
  if (selectTurn.value === 'X') {
    selectTurn.value = 'O';
  } else {
    selectTurn.value = 'X';
  }

  checkWin();
}

//once game has been won, reset board and player moves.
function resetGame() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = '';
    buttons[i].innerHTML = '';
  }
  gameover = false;
}
//in this for loop, disable click function so no more player moves are allowed
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = pickSquare;
}

playButton.onclick = resetGame;
