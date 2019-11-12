import PlayersConfig from "./PlayersConfig";
import BoardSymbol from "./BoardSymols";

test("Initial Player Configuration", () => {
    const playerConfig = new PlayersConfig();
    let p1 = playerConfig.p1;
    expect(p1).toBeDefined();
    expect(p1.name).toBe("Player1");
    expect(p1.boardSymbol).toBe(BoardSymbol.cross);
    expect(p1.isComputer).toBeFalsy;
    expect(p1.id).toBe("P1");

    let p2 = playerConfig.p2;
    expect(p2.name).toBe("Player2");
    expect(p2).toBeDefined();
    expect(p2.boardSymbol).toBe(BoardSymbol.zero);
    expect(p2.isComputer).toBeFalsy;
    expect(p2.id).toBe("P2")
});

test("Change p1 symbol", () => {
    const playerConfig = new PlayersConfig();
    expect(playerConfig.p1.boardSymbol).toBe(BoardSymbol.cross);
    expect(playerConfig.p2.boardSymbol).toBe(BoardSymbol.zero);

    playerConfig.setPlayer1Symbol(false);

    expect(playerConfig.p1.boardSymbol).toBe(BoardSymbol.zero);
    expect(playerConfig.p2.boardSymbol).toBe(BoardSymbol.cross);
});

test("Change p2 symbol", () => {
    const playerConfig = new PlayersConfig();
    expect(playerConfig.p1.boardSymbol).toBe(BoardSymbol.cross);
    expect(playerConfig.p2.boardSymbol).toBe(BoardSymbol.zero);

    playerConfig.setPlayer2Symbol(true);

    expect(playerConfig.p1.boardSymbol).toBe(BoardSymbol.zero);
    expect(playerConfig.p2.boardSymbol).toBe(BoardSymbol.cross);
});
