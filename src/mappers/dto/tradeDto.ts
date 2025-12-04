export interface TradeDto {
  symbol: string;
  price: number;
  qty: number;
  timestamp: number;
  side: "SELL" | "BUY";
}