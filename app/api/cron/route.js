import { connectDB } from "@/lib/db";
import Signal from "@/models/Signal";
import { generateSignal } from "@/lib/signalEngine";

export async function GET() {
  await connectDB();

  const stocks = [
    { name: "RELIANCE", price: 2500, volume: 20000, avgVolume: 10000, rsi: 35 }
  ];

  for (let stock of stocks) {
    const result = generateSignal(stock);

    if (result) {
      await Signal.create({
        stock: stock.name,
        ...result,
        price: stock.price
      });
    }
  }

  return Response.json({ status: 1, message: "Signals generated" });
}