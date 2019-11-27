import {
  Series
} from './models/series';
import PlayerConfig from './models/PlayerConfig'
let playerConfig = new PlayerConfig()
let series = new Series(playerConfig);



startGame()

function startGame() {
  listenForClickOnBoxes();
  displayScores();
  listenForClickOnRestart();
  displayStatus();
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
  $('.status').html('');
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
    displayStatus();
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
    removeEventListenerFromSqaures()
    return;
  }
  return;

}

function removeEventListenerFromSqaures() {
  $('.column').unbind('click');
  return
}

function displayStatus() {
  let status;
  if (series.game.inProgress) {
    status = series.game.currentTurn.name + ' Turns'
  } else {
    if (series.game.winner) {
      console.log(series.game.winner)
      console.log("boardSymbol", series.game.winner._boardSymbol)
      status =  series.game.winner.name + " Wins"

    } else {
      status = "Draw";
    }
  }
  $('.status').html(`<h3>${status}</h3>`);
  return;
}