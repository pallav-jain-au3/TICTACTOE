import Board from "./board";
import GameState from "./GameState";

test('Initial configuration of board', () => {
    const board = new Board();
    expect(board.gameState).toBe(GameState.InProgress);
    expect(board.winningSquare).toBeNull;
});

test('Make a single move on the board keeps the game in progress', () => {
    const board = new Board();
    board.markMoveOnBoard(2, true);
    expect(board.gameState).toBe(GameState.InProgress);
    expect(board.winningSquare).toBeNull;
});

test('Check all winning moves make the player win', () => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    winningCombinations.forEach((winningCombination) => {
        const board = new Board();
        winningCombination.forEach(move => board.markMoveOnBoard(move, true));
        expect(board.gameState).toBe(GameState.Won);
    })
});

test('Mimicking a Player 2 win', function(){
   const moves = [3,0,4,1,6,2];
   const board = new Board();
   let isPlayer1 = true;
   moves.forEach(move => {
       board.markMoveOnBoard(move, isPlayer1);
       isPlayer1 = !isPlayer1;
   });
   expect(board.gameState).toBe(GameState.Won);// 0,1,2 are winning moves for player 2
});

test('Mimicking a Draw', function(){
    const moves = [0,1,3,4,7,6,2,5,8];
    const board = new Board();
    let isPlayer1 = true;
    moves.forEach(move => {
        board.markMoveOnBoard(move, isPlayer1);
        isPlayer1 = !isPlayer1;
    });
    console.log(board._movesMade);
    expect(board.gameState).toBe(GameState.Draw);
});


