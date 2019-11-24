import Player from './players';
import ScoreBoard from './scoreBoard';
import Game from './game';
import PlayerConfig from './PlayerConfig'
const PlayerId = Object.freeze({
    1: "P1",
    2: "P2"
});
// const boardSymbol = Object.freeze({
//     "cross": "X",
//     "zero": "O",
//     "none": "none"
// })

 class Series {
    constructor(p1Config, p2Config){
        this.p1 = p1Config;
        this.p2 = p2Config;
        this.scoreBoard = new ScoreBoard();
        this.game = new Game(this.p1, this.p2)

    }

    startNewGame(){
        this.game = new Game(this.p1, this.p2);
    }

    updateScoreBoard(){
        if (this.game.inProgress == false && this.game.winner){
            if (this.game.winner == this.p1){
                this.scoreBoard.increamentP1score();
            } 
            else{
                this.scoreBoard.increamentP2score();
            }
        }
    }

   
}


export {Series}