 export default class Player {
    constructor(playerId, name, boardSymbol, isComputer = false ){
        this._playerId = playerId,
        this._name = name;
        this._boardSymbol = boardSymbol,
        this._isComputer = isComputer
    }
    get id() {
        return this._playerId
    } 
    get name(){
        return this._name;
    }
    get boardSymbol(){
        return this._boardSymbol
    }
    get isComputer(){
        return this._isComputer
    }
}



