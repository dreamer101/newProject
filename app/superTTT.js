//function setImage(select){
  //var image = document.getElementsByName("image-swap")[0];
 // image.src = select.options[select.selectedIndex].value;}

var buttons = [button1, button2, button3, button4, button5,
               button6, button7, button8, button9, button10,
               button11, button12, button13, button14, button15,
               button16, button17, button18, button19, button20,
               button21, button22, button23, button24, button25];

var gameover = false;

function checkCombination(b1, b2, b3, b4, b5) {
if (b1.innerHTML !== '' && b1.innerHTML === b2.innerHTML && b1.innerHTML === b3.innerHTML && b1.innerHTML === b4.innerHTML && b1.innerHTML === b5.innerHTML) {
gameover = true;

b1.style.backgroundColor = 'red';
b2.style.backgroundColor = 'red';
b3.style.backgroundColor = 'red';
b4.style.backgroundColor = 'red';
b5.style.backgroundColor = 'red';

alert('YOU WIN!!!!');
//fadeIn, animate, a mortal kombat YOU WIN!!!

  }
}
// checks for winner on rows, columns, and diagonals, sorted in an array
function checkWin() {
checkCombination(button1, button2, button3, button4, button5);
checkCombination(button6, button7, button8, button9, button10);
checkCombination(button11, button12, button13, button14, button15);
checkCombination(button16, button17, button18, button19, button20);
checkCombination(button21, button22, button23, button24, button25);

checkCombination(button1, button6, button11, button16, button21);
checkCombination(button2, button7, button12, button17, button22);
checkCombination(button3, button8, button13, button18, button23);
checkCombination(button4, button9, button14, button19, button24);
checkCombination(button5, button10, button15, button20, button25);

checkCombination(button1, button7, button13, button19, button25);
checkCombination(button5, button9, button13, button17, button21);
}

function pickSquare() {
/*jshint validthis: true */

if (gameover || this.innerHTML !== '') {
  return;
}

this.innerHTML = selectTurn.value;

if (selectTurn.value === 'X') {
  selectTurn.value = 'O';
} else {
  selectTurn.value = 'X';
}

checkWin();
}

//

function resetGame() {
 for (var i = 0; i < buttons.length; i++) {
  buttons[i].style.backgroundColor = '';
  buttons[i].innerHTML = '';
 }
  gameover = false;
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = pickSquare;
}

playButton.onclick = resetGame
