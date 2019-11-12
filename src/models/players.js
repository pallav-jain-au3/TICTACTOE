 export default class Player {
    constructor(playerId, name, boardSymbol, isComputer = false ){
        this.id = playerId,
        this.name = name;
        this.boardSymbol = boardSymbol,
        this.isComputer = isComputer
    }
}



