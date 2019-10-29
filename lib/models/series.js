"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Series = void 0;

var _players = _interopRequireDefault(require("./players"));

var _scoreBoard = _interopRequireDefault(require("./scoreBoard"));

var _game = _interopRequireDefault(require("./game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerId = Object.freeze({
  1: "P1",
  2: "P2"
});
var boardSymbol = Object.freeze({
  "cross": "cross",
  "zero": "zero",
  "none": "none"
});

var Series = function Series() {
  _classCallCheck(this, Series);

  this.p1 = new _players["default"](PlayerId[1], p1name = "Player1", boardSymbol.cross);
  this.p2 = new _players["default"](playerId[2], p2name = "player2", boardSymbol.zero);
  this.scoreBoard = new _scoreBoard["default"]();
  this.game = new _game["default"](this.pl, this.p2);
};

exports.Series = Series;