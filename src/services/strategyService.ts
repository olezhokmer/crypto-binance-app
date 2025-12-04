import { TradeDto } from "../mappers/dto/tradeDto";

export const evaluateStrategy = (trades: TradeDto[]) => {
  const firstPrice = trades[0].price;
  const lastPrice = trades[trades.length - 1].price;

  const dropPercent = Math.abs(((firstPrice - lastPrice) / firstPrice) * 100);
  const risePercent = Math.abs(((lastPrice - firstPrice) / firstPrice) * 100);

  if (dropPercent >= 0.005) return { signal: "BUY", price: lastPrice };
  if (risePercent >= 0.005) return { signal: "SELL", price: lastPrice };

  return { signal: "HOLD" };
}