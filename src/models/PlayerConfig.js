import Player from './players'
import BoardSymbol from './BoardSymbol'
export default class PlayerConfig {
    constructor(player1Name = "Player1", player1BoardSymbol = BoardSymbol.cross,
        isPlayer1Computer = false, player2Name = "Player2",
        player2BoardSymbol = BoardSymbol.zero,
        isPlayer2Computer = false) {
        this.Player1 = new Player("P1", player1Name, player1BoardSymbol, isPlayer1Computer);
        this.Player2 = new Player("P2", player2Name, player2BoardSymbol, isPlayer2Computer);
    }
}
