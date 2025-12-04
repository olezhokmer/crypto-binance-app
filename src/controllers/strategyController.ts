import { Request, Response } from "express";

import { mapBinanceTrades } from "../mappers/binanceMapper";
import { fetchRecentTrades } from "../services/binanceService";
import { evaluateStrategy } from "../services/strategyService";

export const getSignalAndTrades = async (req: Request, res: Response) => {
  try {
    const symbol = req.params.symbol;

    const binanceTrades = await fetchRecentTrades(symbol);
    const transformedTrades = mapBinanceTrades(symbol, binanceTrades);

    const strategyInfo = evaluateStrategy(transformedTrades);

    res.json({
      strategyInfo,
      trades: transformedTrades,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch signal and trades" });
  }
}