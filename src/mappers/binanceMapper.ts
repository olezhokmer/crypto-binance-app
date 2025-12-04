import { TradeDto } from "./dto/tradeDto";

export const mapBinanceTrades = (symbol: string, trades: any[]): TradeDto[] => {
  return trades.map((trade) => ({
    symbol,
    price: parseFloat(trade.price),
    qty: parseFloat(trade.qty),
    timestamp: trade.time,
    side: trade.isBuyerMaker ? "SELL" : "BUY",
  }));
}