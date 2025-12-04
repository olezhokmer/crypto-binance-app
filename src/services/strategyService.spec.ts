import { evaluateStrategy } from "./strategyService";

describe("evaluateStrategy", () => {
  test("return BUY when price drops >= 0.005%", () => {
    const trades = [
      { price: 100, symbol: 'BTCUSDT' },
      { price: 96, symbol: 'BTCUSDT' },
    ];

    expect(evaluateStrategy(trades)).toEqual({
      signal: "BUY",
      price: 96,
    });
  });

  test("return SELL when price rises >= 0.005%", () => {
    const trades = [
      { price: 100, symbol: 'BTCUSDT' },
      { price: 104, symbol: 'BTCUSDT' },
    ];

    expect(evaluateStrategy(trades)).toEqual({
      signal: "SELL",
      price: 104,
    });
  });

  test("return HOLD when change < 0.005%", () => {
    const trades = [
      { price: 100, symbol: 'BTCUSDT' },
      { price: 100, symbol: 'BTCUSDT' },
    ];

    expect(evaluateStrategy(trades)).toEqual({
      signal: "HOLD",
    });
  });
})