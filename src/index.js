import {Series} from './models/series';
import PlayersConfig from "./models/PlayersConfig";


let playerConfig = new PlayersConfig();
let series;

startSeries();

function startSeries() {
   series = new Series(playerConfig);
   startGame();
}

function startGame() {
  listenForClickOnBoxes();
  displayScores();
  listenForClickOnRestart();
  listenForPlayerConfigChanges();
}

function listenForClickOnRestart() {
  $('#restart').on('click', () => {
    restartGame();
  })
}

function changePlayerConfig(newConfig) {
  playerConfig = newConfig;
  startSeries();
}

function displayScores() {
  console.log("displaying scores")
  $('.scores').html(`
  <div class = "row">
   <div class = "col-6">
     <p>${series.p1.name}  ${series.scoreBoard._P1Score} </p>
   </div>
   <div class = "col-6">
     <p>${series.p2.name}  ${series.scoreBoard._P2Score} </p>
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

function listenForPlayerConfigChanges() {
    // this should be called from configs page and only when there is any actual changes.
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
    return;
  }
  return;

}

function displayResult() {
  let result;
  if (series.game.winner) {
    result = series.game.winner == series.p1 ? "Player-1 Wins" : "Player-2 Wins"

  } else {
    result = "Draw";
  }
  $('.result').html(`<h3>${result}</h3>`);
  return;
}
