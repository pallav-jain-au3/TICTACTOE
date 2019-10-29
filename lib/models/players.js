"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player =
/*#__PURE__*/
function () {
  function Player(playerId, name, boardSymbol) {
    var isComputer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, Player);

    this._playerId = playerId, this._name = name;
    this._boardSymbol = boardSymbol, this._isComputer = isComputer;
  }

  _createClass(Player, [{
    key: "id",
    get: function get() {
      return this._playerId;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "boardSymbol",
    get: function get() {
      return this._boardSymbol;
    }
  }, {
    key: "isComputer",
    get: function get() {
      return this._isComputer;
    }
  }]);

  return Player;
}();

exports.Player = Player;