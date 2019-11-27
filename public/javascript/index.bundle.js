!function(e){var t={};function r(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);class s{constructor(e,t,r,s=!1){this._playerId=e,this._name=t,this._boardSymbol=r,this._isComputer=s}get id(){return this._playerId}get name(){return this._name}get boardSymbol(){return this._boardSymbol}get isComputer(){return this._isComputer}}class n{constructor(){this._P1Score=0,this._P2Score=0}get P1Score(){return this._P1Score}get P2Score(){return this._P2Score}increamentP1score(){this._P1Score+=1}increamentP2score(){this._P2Score+=1}}var i={Draw:0,InProgress:1,Won:2};class o{constructor(){this.squares=Array(9).fill(0),this.winningSquares,this.movedMade=0,this.gameState=i.InProgress}makeMove(e,t){this.squares[e]=t?1:-1,this.movedMade++,this.updateGameStatus(t)}updateGameStatus(e){const t=e?3:-3;[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach(e=>{let[r,s,n]=e;if(this.squares[r]+this.squares[s]+this.squares[n]==t)return this.gameState=i.Won,void(this.winningSquares=[r,s,n])}),9==this.movedMade&&this.gameState==i.InProgress&&(this.gameState=i.Draw)}}class a{constructor(e,t){this.P1=e,this.P2=t,this.inProgress=!0,this.winner=null,this.winningSquare,this.currentTurn=this.P1,this.board=new o}makemove(e){let t=this.currentTurn==this.P1;this.board.gameState==i.InProgress&&this.board.makeMove(e,t),this.board.gameState!=i.Won&&this.board.gameState!=i.Draw||(this.board.gameState==i.Won&&(this.winner=this.currentTurn,this.winningSquare=this.board.winningSquares),this.inProgress=!1),this.currentTurn=t?this.P2:this.P1}}Object.freeze({1:"P1",2:"P2"});var c={cross:"X",zero:"0",none:"none"};let u=new class{constructor(e){this.p1=e.Player1,this.p2=e.Player2,this.scoreBoard=new n,this.game=new a(this.p1,this.p2)}startNewGame(){this.game=new a(this.p1,this.p2)}updateScoreBoard(){0==this.game.inProgress&&this.game.winner&&(this.game.winner==this.p1?this.scoreBoard.increamentP1score():this.scoreBoard.increamentP2score())}}(new class{constructor(e="Player1",t=c.cross,r=!1,n="Player2",i=c.zero,o=!1){this.Player1=new s("P1",e,t,r),this.Player2=new s("P2",n,i,o)}});function l(){$(".scores").html(`\n  <div class = "row">\n   <div class = "col-6">\n     <p>Player-1 - ${u.scoreBoard._P1Score} </p>\n   </div>\n   <div class = "col-6">\n     <p>Player-2 - ${u.scoreBoard._P2Score} </p>\n    </div>\n  </div>\n  `)}function h(){$(".column").on("click",(function(e){let t=e.target;if($("#"+t.id).attr("class").split(" ").includes("clicked"))return;t.classList.add("clicked");let r=u.game.currentTurn;u.game.makemove(t.id),"X"==r.boardSymbol?t.classList.add("cross"):t.classList.add("zero"),function(){if(0==u.game.inProgress)return null!=u.game.winner&&u.game.winningSquare.forEach(e=>{document.getElementById(e).classList.add("highlighted")}),u.updateScoreBoard(),l(),void $(".column").unbind("click")}(),d()}))}function d(){let e;u.game.inProgress?e=u.game.currentTurn.name+" Turns":u.game.winner?(console.log(u.game.winner),console.log("boardSymbol",u.game.winner._boardSymbol),e=u.game.winner.name+" Wins"):e="Draw",$(".status").html(`<h3>${e}</h3>`)}h(),l(),$("#restart").on("click",()=>{$(".column").removeClass("zero cross highlighted clicked"),u.startNewGame(),h(),$(".status").html("")}),d()}]);