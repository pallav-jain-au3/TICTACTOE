import Player from './players';
import ScoreBoard from './scoreBoard';
import Game from './game'
const PlayerId = Object.freeze({
    1: "P1",
    2: "P2"
});
const boardSymbol = Object.freeze({
    "cross": "cross",
    "zero": "zero", 
    "none":"none"
})

export class Series{
    constructor(){
      
        this.p1 = new Player(PlayerId[1], p1name = "Player1", boardSymbol.cross)
        this.p2 = new Player(playerId[2], p2name = "player2", boardSymbol.zero)
        this.scoreBoard = new ScoreBoard()
        this.game = new Game(this.pl, this.p2)
    }
}