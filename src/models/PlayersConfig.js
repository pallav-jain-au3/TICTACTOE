import Player from "./players";
import BoardSymbol from "./BoardSymols";

export default class PlayersConfig {
    constructor(player1Name = "Player1",
                player1BoardSymbol = BoardSymbol.cross,
                isPlayer1Computer = false,
                player2Name = "Player2",
                player2BoardSymbol = BoardSymbol.zero,
                isPlayer2Computer = false) {
        this.p1 = new Player("P1", player1Name, player1BoardSymbol, isPlayer1Computer);
        this.p2 = new Player("P2", player2Name, player2BoardSymbol, isPlayer2Computer);
    }

    changePlayer1Name(newName) {
        if(newName == this.p2.name) {
            throw new Error("Player 2 and Player 1 Name can not be same");
        }
        this.p1.name = newName
    }

    changePlayer2Name(newName) {
        if(newName == this.p1.name) {
            throw new Error("Player 1 and Player 2 Name can not be same");
        }
        this.p2.name = newName
    }

    setPlayer1IsComputer() {
        if(this.p2.isComputer) {
            throw new Error("P2 is already computer");
        }
        this.p1.isComputer;
    }

    setPlayer2IsComputer() {
        if(this.p1.isComputer) {
            throw new Error("Player 1 is already computer");
        }
        this.p2.isComputer;
    }

    setPlayer1Symbol(isCross) {
        this.p1.boardSymbol = isCross ? BoardSymbol.cross : BoardSymbol.zero;
        this.p2.boardSymbol = !isCross ? BoardSymbol.cross : BoardSymbol.zero;
    }

    setPlayer2Symbol(isCross) {
        this.p2.boardSymbol = isCross ? BoardSymbol.cross : BoardSymbol.zero;
        this.p1.boardSymbol = !isCross ? BoardSymbol.cross : BoardSymbol.zero;
    }
}
