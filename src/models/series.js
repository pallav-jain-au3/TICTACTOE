import Player from './players';
import ScoreBoard from './scoreBoard';
import Game from './game'
const PlayerId = Object.freeze({
    1: "P1",
    2: "P2"
});
const boardSymbol = Object.freeze({
    "cross": "X",
    "zero": "O",
    "none": "none"
})

 class Series {
    constructor() {


    }

    init() {
        this.p1 = new Player("P1", "Player1", boardSymbol.cross)
        this.p2 = new Player("P2", "Player2", boardSymbol.zero)
        this.scoreBoard = new ScoreBoard()
        this.game = new Game(this.p1, this.p2)
    }
    startNewGame() {
        this.game = new Game(this.p1, this.p2)
    }

    updateScoreBoard() {
        if (this.game.inProgress == false) {
            if (this.game.winner == 'X') {
                this.scoreBoard.increamentP1score();
            } else if (this.game.winner == 'O') {
                this.scoreBoard.increamentP2score()
            }
        }
    }
}


export {Series}