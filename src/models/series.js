import ScoreBoard from './scoreBoard';
import Game from './game'
import PlayersConfig from "./PlayersConfig";
const PlayerId = Object.freeze({
    1: "P1",
    2: "P2"
});

 class Series {
    constructor(playerConfig = new PlayersConfig()) {
        this.p1 = playerConfig.p1;
        this.p2 = playerConfig.p2;
        this.scoreBoard = new ScoreBoard()
        this.game = new Game(this.p1, this.p2)
    }

    startNewGame() {
        this.game = new Game(this.p1, this.p2)
    }

    updateScoreBoard() {
        if (this.game.inProgress == false) {
            if (this.game.winner == this.p1) {
                this.scoreBoard.increamentP1score();
            } else {
                this.scoreBoard.increamentP2score()
            }
        }
    }
}


export {Series}
