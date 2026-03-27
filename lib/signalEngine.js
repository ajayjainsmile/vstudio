export function generateSignal(stock) {
  if (stock.volume > stock.avgVolume * 2 && stock.rsi < 40) {
    return {
      signal: "BUY",
      target: stock.price * 1.05,
      stopLoss: stock.price * 0.98
    };
  }

  if (stock.rsi > 70) {
    return {
      signal: "SELL",
      target: stock.price * 0.95,
      stopLoss: stock.price * 1.02
    };
  }

  return null;
}