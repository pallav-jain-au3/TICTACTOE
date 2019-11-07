const Square = require('./square');


export default class Game {
    constructor(P1, P2) {
        this.P1 = P1
        this.P2 = P2
        this.inProgress = true;
        this.winner = null;
        this.winningSquare;
        this.movesMade = 0;
        this.currentTurn = this.P1;
        this.squares = new Array(9).fill().map(s => new Square())
    }

    makemove(i) {
        if (this.inProgress && !this.squares[i].value) {
            this.squares[i].value = this.currentTurn.boardSymbol;
            this.movesMade++;
            this.checkForWinner();
            this.currentTurn = (this.currentTurn !== this.P1) ? this.P1 : this.P2;
        }

    }

    checkForWinner() {
      const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        winningCombinations.forEach(wc =>{
            let [a, b , c] = wc;
            let SqA = this.squares[a].value
            let SqB = this.squares[b].value
            let SqC = this.squares[c].value
            if (SqA && SqA === SqB && SqB === SqC){

                this.inProgress = false;
                this.winner = SqA;
                this.winningSquare = [a, b, c]
               
            }
        })
        if (this.movesMade == 9){
            this.inProgress = false;
            this.winner = null;
        }

    }
}

Game.O = "O";
Game.X = "X"
let game = new Game();
// let sqaure = new Square();

// console.log(game.makemove(0))
// console.log(game.makemove(4))
// console.log(game.makemove(1))
// console.log(game.makemove(5))
// console.log(game.makemove(2))
// console.log(game)
// module.exports = Game;