import { TradeDto } from "../mappers/dto/tradeDto";

export const evaluateStrategy = (trades: TradeDto[]) => {
  const firstPrice = trades[0].price;
  const lastPrice = trades[trades.length - 1].price;

  const dropPercent = ((firstPrice - lastPrice) / firstPrice) * 100;
  const risePercent = ((lastPrice - firstPrice) / firstPrice) * 100;

  if (dropPercent >= 3) return { signal: "BUY", price: lastPrice };
  if (risePercent >= 3) return { signal: "SELL", price: lastPrice };

  return { signal: "HOLD" };
}