import GameState from "./GameState";

export default class Board {

    constructor() {
        this._squares = new Array(9).fill(0)
        this.winningSquare;
        this._movesMade = 0;
        this.gameState = GameState.InProgress;
    }

    // No move == 0
    // Player 1 move == 1
    // Player 2 move == -1
    markMoveOnBoard(i, isP1) {
        if (this._squares[i] == 0){
            this._squares[i] = isP1 ? 1 : -1;
            this._movesMade++;
            this.updateGameState(isP1);
        }
    }

    updateGameState(currentMoveIsForP1) {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        const expectedWinningSum = currentMoveIsForP1 ? 3 : -3;
        winningCombinations.forEach(wc =>{
            let [a, b , c] = wc;
            let SqA = this._squares[a];
            let SqB = this._squares[b];
            let SqC = this._squares[c];
            if (SqA + SqB + SqC == expectedWinningSum) {
                this.gameState = GameState.Won;
                this.winningSquare = [a, b, c]
            }
        });
        if (this._movesMade == 9 && this.gameState == GameState.InProgress){
            this.gameState = GameState.Draw
        }
    }
}
