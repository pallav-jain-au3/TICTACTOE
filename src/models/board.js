import GameState from './GameState';


export default class Board{
    constructor(){
        this.squares = Array(9).fill(0);
        this.winningSquares ;
        this.movedMade = 0;
        this.gameState = GameState.InProgress;
      
    }
    makeMove(i, isP1){
        this.squares[i] = isP1 ? 1 : -1
        this.movedMade++
        this.updateGameStatus(isP1);
    }
    updateGameStatus(isP1){
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
        const expectedWinningSum = isP1 ? 3 : -3;
        winningCombinations.forEach(winningCombination =>{
            let [a, b, c] = winningCombination;
            let SqA = this.squares[a];
            let SqB = this.squares[b];
            let SqC = this.squares[c];
            if (SqA + SqB + SqC == expectedWinningSum){
                this.gameState = GameState.Won;
                this.winningSquares = [a, b, c];
                return
            }
        })
        if (this.movedMade == 9 && this.gameState == GameState.InProgress){
            this.gameState = GameState.Draw
        }
    }
}