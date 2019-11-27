import Board from './board';
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

    makemove(i) {
        let isP1 = this.currentTurn == this.P1;
        if (this.board.gameState == GameState.InProgress) {
            this.board.makeMove(i, isP1)
        }
        if (this.board.gameState == GameState.Won || this.board.gameState == GameState.Draw) {
            if (this.board.gameState == GameState.Won) {
                this.winner = this.currentTurn;
                this.winningSquare = this.board.winningSquares;
            }
            this.inProgress = false;
        }
        this.currentTurn = isP1 ? this.P2 : this.P1;
    }
}