import { connectDB } from "@/lib/db";
import Signal from "@/models/Signal";

export async function GET() {
  await connectDB();

  const signals = await Signal.find().sort({ createdAt: -1 });

  return Response.json({
    status: 1,
    data: signals
  });
}