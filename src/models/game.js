import Board from './board' ;
import GameState from './GameState'

export default class Game {
    constructor(P1, P2) {
        this.P1 = P1;
        this.P2 = P2;
        this.inProgress = true;
        this.winner = null;
        this.winningSquare;
        this.currentTurn = this.P1;
        this.board = new Board();
    }

    makemove(i){
        if (this.board.gameState == GameState.inProgress){
            let isP1 = this.currentTurn == this.P1;
            this.board.makemove(i, isP1)
        }
        if (this.gameState == GameState.Won || this.gameState == GameState.Draw){
            if (this.board.winner){
                this.winner = this.currentTurn;
                this.winningSquare = this.board.winningSquare;
            }
           this.inProgress = false;
        }
    }
}