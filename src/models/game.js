import Board from "./board";
import GameState from "./GameState";

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
        if (this.board.gameState == GameState.InProgress) {
            const isPlayer1 = this.currentTurn == this.P1;
            this.board.markMoveOnBoard(i, isPlayer1);
            console.log(this.currentTurn.name);
            if (this.board.gameState == GameState.Won) {
                this.winner = this.currentTurn;
                this.winningSquare = this.board.winningSquare;
            }
            if (this.board.gameState == GameState.Won || this.board.gameState == GameState.Draw) {
                this.inProgress = false;
            }
            this.currentTurn = (this.currentTurn !== this.P1) ? this.P1 : this.P2;
        }
    }
}
