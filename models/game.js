const Player = require('./players');
const ScoreBoard = require('./scoreBoard');
const playerId = Object.freeze({
    1: "Player1",
    2: "P2"
});
const boardSymbol = Object.freeze({
    "cross": "X",
    "zero": "0"
})

class Game {
    constructor(p1name, p2name = "Computer", isPlayer2Computer = true) {
        this.player1 = new Player(playerId[1], p1name, boardSymbol.cross);
        this.player2 = new Player(playerId[2], p2name, boardSymbol.zero, isPlayer2Computer)
        this.score = new ScoreBoard()
    }
}

module.exports = Game;