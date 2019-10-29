class ScoreBoard {
    constructor() {
        this._P1Score = 0;
        this._P2Score = 0;
    }
    get P1Score() {
        return this._P1Score;
    }

    get P2Score() {
        return this._P2Score;
    }

    increamentP1score() {
        this._P1Score += 1;
    }

    increamentP2score() {
        this._P2Score += 1;
    }
}

module.exports = ScoreBoard;