"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScoreBoard = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScoreBoard =
/*#__PURE__*/
function () {
  function ScoreBoard() {
    _classCallCheck(this, ScoreBoard);

    this._P1Score = 0;
    this._P2Score = 0;
  }

  _createClass(ScoreBoard, [{
    key: "increamentP1score",
    value: function increamentP1score() {
      this._P1Score += 1;
    }
  }, {
    key: "increamentP2score",
    value: function increamentP2score() {
      this._P2Score += 1;
    }
  }, {
    key: "P1Score",
    get: function get() {
      return this._P1Score;
    }
  }, {
    key: "P2Score",
    get: function get() {
      return this._P2Score;
    }
  }]);

  return ScoreBoard;
}();

exports.ScoreBoard = ScoreBoard;