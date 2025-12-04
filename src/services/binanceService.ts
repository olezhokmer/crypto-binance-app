import axios from "axios";

const BINANCE_URL = 'https://api.binance.com/api/v3';

export const fetchRecentTrades = async (symbol: string) => {
  try {
    const response = await axios.get(`${BINANCE_URL}/trades`, {
      params: { symbol },
    });
    return response.data;
  } catch (err) {
    console.error("Error fetching binance trades:", err);
    throw err;
  }
}