!function(e){var r={};function t(s){if(r[s])return r[s].exports;var n=r[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,s){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(s,n,function(r){return e[r]}.bind(null,n));return s},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r){e.exports=class{constructor(){this.value=null,this.highlighted=!1}}},function(e,r,t){"use strict";t.r(r);class s{constructor(e,r,t,s=!1){this._playerId=e,this._name=r,this._boardSymbol=t,this._isComputer=s}get id(){return this._playerId}get name(){return this._name}get boardSymbol(){return this._boardSymbol}get isComputer(){return this._isComputer}}class n{constructor(){this._P1Score=0,this._P2Score=0}get P1Score(){return this._P1Score}get P2Score(){return this._P2Score}increamentP1score(){this._P1Score+=1}increamentP2score(){this._P2Score+=1}}const i=t(0);class o{constructor(e,r){this.P1=e,this.P2=r,this.inProgress=!0,this.winner=null,this.winningSquare,this.movesMade=0,this.currentTurn=this.P1,this.squares=new Array(9).fill().map(e=>new i)}makemove(e){this.inProgress&&!this.squares[e].value&&(this.squares[e].value=this.currentTurn.boardSymbol,this.movesMade++,this.checkForWinner(),this.currentTurn=this.currentTurn!==this.P1?this.P1:this.P2)}checkForWinner(){[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach(e=>{let[r,t,s]=e,n=this.squares[r].value,i=this.squares[t].value,o=this.squares[s].value;n&&n===i&&i===o&&(this.inProgress=!1,this.winner=n,this.winningSquare=[r,t,s])}),9==this.movesMade&&(this.inProgress=!1,this.winner=null)}}o.O="O",o.X="X";new o;Object.freeze({1:"P1",2:"P2"});const c=Object.freeze({cross:"X",zero:"O",none:"none"});let a=new class{constructor(){}init(){this.p1=new s("P1","Player1",c.cross),this.p2=new s("P2","Player2",c.zero),this.scoreBoard=new n,this.game=new o(this.p1,this.p2)}startNewGame(){this.game=new o(this.p1,this.p2)}updateScoreBoard(){0==this.game.inProgress&&("X"==this.game.winner?this.scoreBoard.increamentP1score():"O"==this.game.winner&&this.scoreBoard.increamentP2score())}};function u(){$(".scores").html(`\n  <h3>Player-1 :${a.scoreBoard._P1Score} </h3>\n  <h3>Player-2 :${a.scoreBoard._P2Score} </h3>\n  `)}function l(){$(".column").on("click",(function(e){let r=e.target;if($("#"+r.id).attr("class").split(" ").includes("clicked"))return;r.classList.add("clicked");let t=a.game.currentTurn;a.game.makemove(r.id),"X"==t.boardSymbol?r.classList.add("cross"):r.classList.add("zero"),function(){if(0==a.game.inProgress)return null!=a.game.winner&&a.game.winningSquare.forEach(e=>{document.getElementById(e).classList.add("highlighted")}),a.updateScoreBoard(),u(),void function(){let e;e=a.game.winner?"X"==a.game.winner?"Player-1 Wins":"Player-2 Wins":"Draw";$(".result").html(`<h3>${e}</h3>`)}()}()}))}a.init(),l(),u(),$("#restart").on("click",()=>{$(".column").removeClass("zero cross highlighted clicked"),a.startNewGame(),l(),$(".result").html("")})}]);