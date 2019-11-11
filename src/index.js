import {Series} from './models/series';
let series = new Series();
series.init();

startGame()

function startGame() {
  listenForClickOnBoxes();
  displayScores();
  listenForClickOnRestart();
}

function listenForClickOnRestart() {
  $('#restart').on('click', () => {
    restartGame();
  })
}

function displayScores() {
  $('.scores').html(`
  <div class = "row">
   <div class = "col-6">
     <p>Player-1 - ${series.scoreBoard._P1Score} </p>
   </div>
   <div class = "col-6">
     <p>Player-2 - ${series.scoreBoard._P2Score} </p>
    </div>
  </div>

 
  `)
}

function restartGame() {
  $('.column').removeClass('zero cross highlighted clicked');
  series.startNewGame();
  listenForClickOnBoxes();
  clearResult();
}

function clearResult() {
  $('.result').html('');
  return;
}

function listenForClickOnBoxes() {
  $('.column').on('click', function (e) {
    let square = e.target;
    if ($('#' + square.id).attr('class').split(' ').includes('clicked')) {
      return
    }
    square.classList.add('clicked')
    let currentTurn = series.game.currentTurn;
    series.game.makemove(square.id)
    if (currentTurn.boardSymbol == 'X') {
      square.classList.add('cross');
    } else {
      square.classList.add('zero');
    }
    checkForGameProgress();
  })
}

function checkForGameProgress() {
  if (series.game.inProgress == false) {
    if (series.game.winner != null) {
      series.game.winningSquare.forEach(square => {
        let box = document.getElementById(square);
        box.classList.add('highlighted');
       
      })
    }
    series.updateScoreBoard();
    displayScores();
    displayResult();
    removeEventListenerFromSqaures()
    return;
  }
  return;

}

function removeEventListenerFromSqaures(){
  $('.column').unbind('click');
  return
}

function displayResult() {
  let result;
  if (series.game.winner) {
    result = series.game.winner == 'X' ? "Player-1 Wins" : "Player-2 Wins"

  } else {
    result = "Draw";
  }
  $('.result').html(`<h3>${result}</h3>`);
  return;
}
